var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/map', function(req, res, next) {
  res.render('map', { title: 'map' });
});

module.exports = router;
