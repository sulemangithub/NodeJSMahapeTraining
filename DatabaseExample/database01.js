const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/mydb");

const db = mongoose.connection;

module.exports = db;