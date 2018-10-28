const mongoose = require("mongoose");

const connection = mongoose.createConnection("mongodb://localhost/test");

console.log("connected:");

module.exports = connection;