const connection = require("../connections/connection");
const mongoose = require("mongoose");

let UserModel = mongoose.Schema({
    _id:String,
    password:String,
    name:String,
    city:String,
    phone:String
});

module.exports = connection.model("user",UserModel);