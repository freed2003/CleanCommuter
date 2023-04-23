require('dotenv').config();

const getMapsData = async (start, end) => {
  const mapsEndpoint = 'https://maps.googleapis.com/maps/api/directions/json';
  const dest = `destination=${start.lat},${start.lng}`;
  const origin = `origin=${end.lat},${end.lng}`;
  const key = `key=${process.env.MAPS_API_KEY}`;
  // const methods = ['driving', 'walking', 'bicycling', 'transit'];
  const methods = ['driving', 'walking', 'bicycling'];

  /* request each method in parallel */
  const requests = methods.map(method => fetch(
    `${mapsEndpoint}?${dest}&${origin}&${key}&mode=${method}`
  ));
  const responses = await Promise.all(requests);
  const json = responses.map((response => response.json()));
  const data = await Promise.all(json);

  let ret = [];
  data.forEach((method, i) => {
    ret.push({
      method: methods[i],
      distance: method.routes[0].legs[0].distance.value / 1000, // distance in km
      travel_time: method.routes[0].legs[0].duration.value / 60, // time in minutes
      route: method,
    });
  });

  return ret;
};

module.exports = {
  getMapsData,
};