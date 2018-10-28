const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
    _id:Number,
    name:String,
    salary:String   
});

module.exports = mongoose.model("employees",employeeSchema);