var shortUrl = require("node-url-shortener");
const Url =require("../models/shortUrl")



const getShortenUrl = async (req, res) => {
    
    try {
      const {url}=req.body
      
      res.status(200).send(url);
    } catch (err) {
        res.status(404).send(err);
    }
  };
  module.exports = { getShortenUrl };