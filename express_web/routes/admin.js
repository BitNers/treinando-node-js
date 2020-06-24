const express = require('express');
const router = express.Router();


router.get('/', function(req,res){
    res.send('Acessando via GET');
});

router.post('/', function(req,res){
    res.send('Acessando via POST');
});
  
router.delete('/', function(req,res){
    res.send('Acessando via DELETE');
});
  
router.put('/', function(req,res){
    res.send('Acessando via PUT');
});
  
router.patch('/', function(req,res){
    res.send('Acessando via PATCH');
});

module.exports = router