const mongoose = require("mongoose");

const quotesSchema = new mongoose.Schema({
    bibletext: Array,
    reference: String
}, {timestamps: true});


const Quote = new mongoose.model("Quote", quotesSchema);

module.exports = Quote;