const mongoose=require('mongoose');

mongoose.connect('mongodb://127.0.0.1/todolistapp');

const db=mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',
    function(){
        console.log('connect to databse');
    })

    module.exports=db;