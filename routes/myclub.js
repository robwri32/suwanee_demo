var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/myclub', function(req, res, next) {
  res.render('myclub', { title: 'myclub' });
});

module.exports = router;
