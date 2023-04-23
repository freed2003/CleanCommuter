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
  console.log(data);

  let ret = [];
  data.forEach(method => {
    ret.push({
      method: method,
      distance: data.routes[0].legs.distance.value / 1000, // distance in km
      travel_time: data.routes[0].legs.duration.value / 60, // time in minutes
    });
  });

  return ret;
};

module.exports = {
  getMapsData,
};