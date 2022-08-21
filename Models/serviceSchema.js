const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    meetingname: String,
    meetingdate: String,
    meetingvenue: String
});

const Service = new mongoose.model("Service", serviceSchema);

module.exports = Service;