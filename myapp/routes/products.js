var express = require('express');
var router = express.Router();
const Products =require ('./products.json')
/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json( Products ) ;
});


router.get('/:id', (req, res, next)=> {
    res.json( Products[req.params.id] ) ;
});


router.get('/:id/:qt', (req, res, next)=> {
    res.json( Products[req.params.id] ) 
    res.json( Products[req.params.qt] ) 
    ;
});
module.exports = router;
