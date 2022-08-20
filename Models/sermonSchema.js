const mongoose = require("mongoose");

const sermonSchema = new mongoose.Schema({
    messageTitle: String,
    messageURL: String,
    messageNote: String
});

const Sermon = new mongoose.model("Sermon", sermonSchema);

module.exports = Sermon;