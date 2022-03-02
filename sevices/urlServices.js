const Url =require("../models/shortUrl")

const isUrlExist=async (url)=>{
    let tempUrl=await User.findOne({ longUrl: url })
    if(tempUrl){
        return tempUrl
    }
    return null
}

const urlShortner=async (url)=>{
   let tempUrl
}