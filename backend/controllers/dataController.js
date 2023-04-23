const { emission_data, alt_emission_avgs, alt_price_averages } = require('../data/emission_data');
const { getMapsData } = require('../utils/maps');

const coefficientMatrix = [
  3, // price weight
  5, // emission weight
  3, // time weight
];

/* Accepts inputs, and reduces them into one metric for ranking */
const transformer = (price, CO2_total, travel_time) => {
  let sum = 0;
  sum += coefficientMatrix[0] * price;
  sum += coefficientMatrix[1] * CO2_total;
  sum += coefficientMatrix[2] * (travel_time ** 2);
  return sum;
};

/* Accepts input data, and ranks transformer(data) in ascending order */
const rankData = async (start, end) => {
  const res = [];

  /* alternative modes of transport to set */
  const maps_data = await getMapsData(start, end);
  maps_data.forEach(transport_mode => {
    if (transport_mode.method === 'driving')
      return;

    transport_mode.MSRP = alt_price_averages[transport_mode.method];
    transport_mode.CO2_total = alt_emission_avgs[transport_mode.method] * transport_mode.distance;
    const metric = transformer(
      transport_mode.MSRP,
      transport_mode.CO2_total,
      transport_mode.travel_time,
    );

    res.push([metric, transport_mode]);
  });

  /* filter car data */
  const car_data = maps_data.find(transport_mode => transport_mode.method === 'driving');

  /* individual car data */
  emission_data.forEach(car => {
    car.CO2_total = car.CO2_avg * car_data.distance;
    car.travel_time = car_data.travel_time;
    const metric = transformer(
      car.MSRP,             // USD
      car.CO2_total,        // g
      car.travel_time, // minutes
    );

    res.push([metric, car]);
  });

  /* Sort by ascending metrics */
  res.sort((a, b) => {
    return a[0] > b[0] ? 1 : -1;
  });

  const best_method = res[0].method || 'driving';
  const best_route = maps_data.find(method => method.method === best_method);

  return { 
    scores: res,
    best_route,
  };
};

module.exports = { rankData };
