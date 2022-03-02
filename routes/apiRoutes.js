const express = require("express");
const {getShortenUrl,goToPage}= require('../controllers/urlController')
const apiRouter = express.Router();

apiRouter.post("/shorten-url",getShortenUrl)
apiRouter.get("/shorten-url-sugestions",getShortenUrl)
// in this route we will redirect the url we have creted to long url
apiRouter.get("/:urlId",goToPage)

module.exports = apiRouter;
