const mongoose = require("mongoose");

const sermonSchema = new mongoose.Schema({
    messageTitle: String,
    messageDetails: String,
    messagePreacher: String,
    messageImage: {
        data: Buffer,
        contentType: String,
        filename: String,
        originalname: String
    }
});

const Sermon = new mongoose.model("Sermon", sermonSchema);

module.exports = Sermon;