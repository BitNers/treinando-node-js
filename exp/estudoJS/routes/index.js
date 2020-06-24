var express = require('express');
var router = express.Router();

function logReq(req,res, next){
  console.log("Executando Middleware em Rotas.");
  return next();
}

/* GET home page. */
router.get('/',logReq, function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
