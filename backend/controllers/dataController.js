const emission_data = require('../data/emission_data');

const coefficientMatrix = [
  3, // price weight
  5, // emission weight
  10, // time weight
];

/* Accepts inputs, and reduces them into one metric for ranking */
const transformer = (data) => {
  /* a*x + b*y + c*z^2 */
  let sum = 0;
  // sum += coefficientMatrix[0] * data.price;
  sum += coefficientMatrix[1] * data.CO2_avg * data.distance;
  // sum += coefficientMatrix[2] * data.time;
  return sum;
};

const append_maps_data = (entry, distance) => {
  entry.distance = distance;
}

/* Accepts input data, and ranks transformer(data) in ascending order */
const rankData = (distance) => {
  const res = [];
  for (let entry of emission_data) {
    append_maps_data(entry, distance);
    const metric = transformer(entry);
    res.push([metric, entry]);
  }

  res.sort((a, b) => {
    return a[0] > b[0] ? 1 : -1;
  });

  return res;
};

module.exports = { rankData };