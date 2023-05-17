var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render("index");
});

router.get('/cloud', (req,res) => {
  res.render("cloud");
});

router.get('/seagame', (req,res) => {
  res.render("seagame");
});

module.exports = router;
