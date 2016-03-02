var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/map', function(req, res, next) {
  res.render('map', { title: 'Map' });
});


router.get('/restaurant', function(req, res, next) {
  res.render('restaurant', { title: 'restaurant' });
});

router.get('/automotive', function(req, res, next) {
  res.render('automotive', { title: 'automotive' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});
module.exports = router;
