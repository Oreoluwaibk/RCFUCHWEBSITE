const mongoose = require("mongoose");

const excosSchema = new mongoose.Schema({
    post: String,
    image: {
        data: Buffer,
        contentType: String,
        filename: String,
        originalname: String
    },
    name: String,

}, {timestamps: true});


const Exco = new mongoose.model("Exco", excosSchema);

module.exports = Exco;

