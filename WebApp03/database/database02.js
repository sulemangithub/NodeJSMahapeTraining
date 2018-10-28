const connection = require("./database01");

const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
    _id:Number,
    name:String,
    author:String,
    price:Number
});

module.exports = connection.model("books",bookSchema);