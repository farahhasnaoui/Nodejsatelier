
var express = require('express');
var router = express.Router();
var os = require("os");

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json( {
    hostname: os.hostname(),
    type: os.type(),
    platform: os.platform(),
     });
});

router.get('/cpus', (req, res, next)=> {
    res.json( {
        model: os.cpus()
    }) ;
});
  router.get('/cpus/:id', (req, res, next)=> {
    res.json( {
    model: os.cpus()[req.params.id]
    }) ;
});
module.exports = router;