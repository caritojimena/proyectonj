
/* instanciar el framework */
var express = require('express');
var router = express.Router();

/* GET users listing. */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({message:'respond with a resource'});
});

module.exports = router;
