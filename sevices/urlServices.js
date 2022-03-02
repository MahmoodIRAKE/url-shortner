const Url =require("../models/shortUrl")
const validUrl = require('valid-url');
const shortid = require('shortid');
const {baseUrl} = require('../config');


const isValidUrl= async (url)=>{
    if (!validUrl.isUri(url)) {
        return false
    }
    return true;
}

const isUrlExist=async (url)=>{
    let tempUrl=await Url.findOne({ longUrl: url })
    if(tempUrl){
        return tempUrl
    }
    return null
}

const urlIdGenrator= async()=>{
    let urlId = shortid.generate();
    let tempId=await Url.findOne({ urlId: urlId })
    while(tempId){
        urlId = shortid.generate();
        tempId=await Url.findOne({ urlId: urlId })
    }
    return urlId
}

const urlShortner=async (url)=>{
   let tempUrl=await isUrlExist(url)
   if(tempUrl){
      return tempUrl.shortUrl 
   }
   let urlId=await urlIdGenrator()
   let shortUrl=baseUrl+urlId
   const newUrl = new Url({shortUrl:shortUrl,longUrl:url,urlId:urlId});
   return newUrl

}

module.exports={urlShortner,isValidUrl}