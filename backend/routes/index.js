const express = require('express');
const dataController = require('../controllers/dataController');

let router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  return res.json({ });
});

router.get('/rankData', (req, res, next) => {
  const ranked = dataController.rankData(100);
  return res.json(ranked.slice(0, 10));
});

module.exports = router;