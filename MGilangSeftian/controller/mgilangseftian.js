const Pariwisata = require('../model/pariwisata');

const createPariwisata= (req,res)=>{
    const datapariwisata = new Pariwisata({
        namaMahasiswa : req.body.namaMahasiswa,
        namaPariwisata : req.body.namaPariwisata,
        lokasi : req.body.lokasi,
    });

    // console.log(datapariwisata);
    datapariwisata.save().then((createdPariwisata)=>{
        res.status(201).json({
            message : "Data pariwisata berhasil ditambah",
            parwstId : createdPariwisata._id
        });
    });
};

module.exports = {createPariwisata}