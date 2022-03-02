
const Url =require("../models/shortUrl")
const {urlShortner,isValidUrl}=require("../sevices/urlServices")


const getShortenUrl = async (req, res) => {
    
    try {
      const {url}=req.body
      let checkUrl= await isValidUrl(url)
      if(!checkUrl){
        res.status(404).send("THIS URL IS IN VALID"); 
      }
      let urlObj=await urlShortner(url)
      if(typeof(urlObj) !== 'string'){
        urlObj.save()
      }
      res.status(200).send(urlObj);
    } catch (err) {
        res.status(500).send(err);
    }
  };

  const goToPage = async (req, res) => {
    
    try {
      const {urlId}=req.params
      res.status(200).send(urlId);
    } catch (err) {
        res.status(500).send(err);
    }
  };

  module.exports = { getShortenUrl,goToPage };