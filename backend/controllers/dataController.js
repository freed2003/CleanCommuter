const { emission_data, alt_emission_avgs } = require('../data/emission_data');
const { getMapsData } = require('../utils/maps');

const coefficientMatrix = [
  3, // price weight
  5, // emission weight
  3, // time weight
];

/* Accepts inputs, and reduces them into one metric for ranking */
const transformer = (price, CO2_avg, distance, travel_time) => {
  let sum = 0;
  sum += coefficientMatrix[0] * price;
  sum += coefficientMatrix[1] * CO2_avg * distance;
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

    const metric = transformer(
      0,
      alt_emission_avgs[transport_mode.method],
      transport_mode.distance,
      transport_mode.travel_time
    );

    res.push([metric, transport_mode]);
  });

  /* filter car data */
  const car_data = maps_data.find(transport_mode => transport_mode.method === 'driving');

  /* individual car data */
  emission_data.forEach(car => {
    const metric = transformer(
      0,                    // USD
      car.CO2_avg,          // g/km
      car_data.distance,    // km
      car_data.travel_time, // minutes
    );

    res.push([metric, car]);
  });

  /* Sort by ascending metrics */
  res.sort((a, b) => {
    return a[0] > b[0] ? 1 : -1;
  });

  return res;
};

module.exports = { rankData };