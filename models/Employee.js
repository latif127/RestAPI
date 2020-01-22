const mongoose = require('mongoose');

const EmployeeSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    position:String,
    address:String,
    city:String,
    country:{
        type:String,
        required:true
    },
    phone:String
});

module.exports=mongoose.model('Employees', EmployeeSchema);