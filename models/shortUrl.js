const { Schema, model } = require("mongoose");



const urlSchema = new Schema({
    longUrl: { type: String, required: true, unique: true },
    shortUrl: { type: String, required: true, unique: true },
});

const Url = model("url", urlSchema);
module.exports = Url;