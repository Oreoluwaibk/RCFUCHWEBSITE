const mongoose = require("mongoose");

const uploadSchema = new mongoose.Schema({
    uploadImage: {
        data: Buffer,
        contentType: String,
        filename: String,
        originalname: String
    }
}, {timestamps: true});


const Upload = new mongoose.model("Upload", uploadSchema);

module.exports = Upload;