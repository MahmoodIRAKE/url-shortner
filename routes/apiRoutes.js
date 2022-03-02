const express = require("express");
const {getShortenUrl}= require('../controllers/urlController')
const apiRouter = express.Router();

apiRouter.post("/shorten-url",getShortenUrl)
apiRouter.get("/shorten-url-sugestions",getShortenUrl)

module.exports = apiRouter;
