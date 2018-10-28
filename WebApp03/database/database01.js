const mongoose = require("mongoose");

mongoose.createConnection("mongodb://localhost/bookshop");

const db = mongoose.connection;

module.exports = db;
