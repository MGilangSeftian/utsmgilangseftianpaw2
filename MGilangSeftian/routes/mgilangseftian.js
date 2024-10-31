var express = require('express');
var router = express.Router();

// router.get('/', function(req,res,next){
//     res.send('respons dari pariwisata router');
// });

const PariwisataController = require("../controller/mgilangseftian")

router.post("/", PariwisataController.createPariwisata);

// link repository github: 
// https://github.com/MGilangSeftian/utsmgilangseftianpaw2.git

module.exports = router;