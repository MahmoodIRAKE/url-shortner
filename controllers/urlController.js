
const Url =require("../models/shortUrl")
const {urlShortner,isValidUrl,findByUrlId,urlSugestions}=require("../sevices/urlServices")


const getShortenUrl = async (req, res) => {
    
    try {
      const {url}=req.body
      let checkUrl= await isValidUrl(url)
      if(!checkUrl){
        res.status(404).send("THIS URL IS IN VALID"); 
      }
      let urlObj=await urlShortner(url,false,'')
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
      let urlObj=await findByUrlId(urlId)
      if(!urlObj){
        res.status(200).send("THIS URL IS INVALID PLEASE CHECK AGIAN");
      }
      res.redirect(urlObj.longUrl)
    } catch (err) {
        res.status(500).send(err);
    }
  };
  
  const InsertCustomUrl = async (req, res) => {
    
    try {
      const {customUrl}=req.params
      const {url}=req.body
      
      let checkUrl= await isValidUrl(url)
      if(!checkUrl){
        res.status(404).send("THIS URL IS IN VALID"); 
      }
     
      let urlObj=await findByUrlId(customUrl)
      if(urlObj){
        let sugUrlArray= await urlSugestions(customUrl)
        res.status(200).send({msg:"THIS URL ALREADY USED ",sug:sugUrlArray});
      }
      let urlObjResult=await urlShortner(url,true,customUrl)
      if(typeof(urlObjResult) !== 'string'){
        urlObjResult.save()
      }
       res.status(200).send(urlObjResult);
    } catch (err) {
        res.status(500).send(err);
    }
  };

  module.exports = { getShortenUrl,goToPage,InsertCustomUrl };