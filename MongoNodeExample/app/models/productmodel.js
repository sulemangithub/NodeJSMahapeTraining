const mongoose = require("mongoose");
const connection = require("../connections/connection");

let ProductModel = mongoose.Schema({
    _id:Number,
    name:String,
    category:String,
    price:Number
});

module.exports = connection.model("Product",ProductModel);