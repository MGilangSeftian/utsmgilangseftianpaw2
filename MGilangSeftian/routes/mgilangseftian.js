var express = require('express');
var router = express.Router();

// router.get('/', function(req,res,next){
//     res.send('respons dari pariwisata router');
// });

const PariwisataController = require("../controller/mgilangseftian")

router.post("/", PariwisataController.createPariwisata);

module.exports = router;