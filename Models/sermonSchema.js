const mongoose = require("mongoose");

const sermonSchema = new mongoose.Schema({
    messageTitle: String,
    messageDetails: String,
    messagePreacher: String,
    messageAudio: String
});

const Sermon = new mongoose.model("Sermon", sermonSchema);

module.exports = Sermon;