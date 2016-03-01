var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/restaurant', function(req, res, next) {
  res.render('restaurant', { title: 'restaurant' });
});

module.exports = router;
