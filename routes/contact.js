var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'contact' });
});

module.exports = router;
