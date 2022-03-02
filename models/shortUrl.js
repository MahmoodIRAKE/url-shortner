const { Schema, model } = require("mongoose");



const urlSchema = new Schema({
    urlId: { type: String, required: true, unique: true },
    longUrl: { type: String, required: true, unique: true },
    shortUrl: { type: String, required: true, unique: true },
});

const Url = model("url", urlSchema);
module.exports = Url;