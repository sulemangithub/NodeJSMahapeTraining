const mongoose = require("mongoose");

const bookschema = mongoose.Schema({
    _id:Number,
    name:String,
    author:String,
    price:String,
    pubdate:Date
});

module.exports = mongoose.model("book",bookschema);