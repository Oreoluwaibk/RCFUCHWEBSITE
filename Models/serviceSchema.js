const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    messageTitle: String,
    messageURL: String,
    messageNote: String
});

const Service = new mongoose.model("Sermon", serviceSchema);

module.exports = Service;