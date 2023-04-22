const getMapsData = async (start, end) => {


  return [
    {
      method: 'DRIVE',
      distance: 10,
      travel_time: 30,
    },
    {
      method: 'WALK',
      distance: 10,
      travel_time: 80,
    },
    {
      method: 'BICYCLE',
      distance: 10,
      travel_time: 40,
    },
  ];
};

module.exports = {
  getMapsData,
};