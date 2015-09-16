var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {

  var flash = req.flash('message');
  var message = '';

  if(flash.length > 0) message = flash[0];

  res.render('index', { title: 'Express', message: flash});
});

module.exports = router;
