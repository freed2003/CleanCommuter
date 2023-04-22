const express = require('express');
const dataController = require('../controllers/dataController');

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.json({ });
});

router.post('/rankData', (req, res, next) => {
  let { start, end } = req.query;

  try {
    start = json.parse(start);
    end = json.parse(end);
  } catch (e) {
    return res.status(400).send('Start and end required');
  }

  const ranked = dataController.rankData(start, end);
  return res.json(ranked.slice(0, 15));
});

module.exports = router;