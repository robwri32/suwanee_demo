var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/automotive', function(req, res, next) {
  res.render('automotive', { title: 'automotive' });
});

module.exports = router;
