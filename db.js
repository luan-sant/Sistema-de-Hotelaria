const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://hitechotel:hitec1799@cluster0.qzqp9.mongodb.net/mern-rooms'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Conexão com o banco mal sucedida!`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Conexão com o banco bem sucedida!`);
})

module.exports = mongoose