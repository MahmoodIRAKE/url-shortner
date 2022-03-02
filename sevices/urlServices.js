const Url = require("../models/shortUrl")
const validUrl = require('valid-url');
const shortid = require('shortid');
const { baseUrl } = require('../config');


const isValidUrl = async (url) => {
    if (!validUrl.isUri(url)) {
        return false
    }
    return true;
}

const isUrlExist = async (url) => await Url.findOne({ longUrl: url })


const urlSugestions = async (customUrl) => {

    let sugArr = [];
    let sugStr = shortid.generate();
    for (let i = 0; i < 10; i++) {
        
        let urlIndexCut = Math.floor(Math.random() * sugStr.length - 5)
        let tempStr = sugStr.slice(urlIndexCut)
        let customUrlIndex = Math.floor(Math.random() * customUrl.length - 1)
        let tempCustomUrl = customUrl.slice(customUrlIndex)
        let urlId = tempStr + tempCustomUrl
        tempId = await Url.findOne({ urlId: urlId })
        if (!tempId) {
            sugArr.push(urlId);
        }
        console.log(sugArr)
    }
    return sugArr
}

const urlIdGenrator = async () => {
    let tempId = true;
    while (tempId) {
        urlId = shortid.generate()
        urlIndexCut = Math.floor(Math.random() * urlId.length + 1)
        urlId = urlId.slice(urlIndexCut)
        tempId = await Url.findOne({ urlId: urlId })
    }
    return urlId
}
const urlShortner = async (url, isCustom, urlExtention) => {

    let tempUrl = await isUrlExist(url)
    if (tempUrl) {
        return tempUrl.shortUrl
    }
    let urlId = ''
    if (isCustom) {
        urlId = urlExtention;
    }
    else {
        urlId = await urlIdGenrator()
    }
    let shortUrl = baseUrl + urlId
    const newUrl = new Url({ shortUrl: shortUrl, longUrl: url, urlId: urlId });
    return newUrl

}

const findByUrlId = async (id) => await Url.findOne({ urlId: id })


module.exports = { urlShortner, isValidUrl, findByUrlId, urlSugestions }