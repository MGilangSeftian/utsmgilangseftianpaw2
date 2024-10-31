const mongoose = require("mongoose");

const pariwisataSchema = new mongoose.Schema({
    namaMahasiswa : {type:String, required: true},
    namaPariwisata :{type :String, required :true},
    lokasi : {type : String, required : true},  
});

module.exports = mongoose.model("Pariwisata", pariwisataSchema);