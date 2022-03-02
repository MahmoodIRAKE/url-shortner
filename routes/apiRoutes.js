const express = require("express");
const {getShortenUrl,goToPage,InsertCustomUrl}= require('../controllers/urlController')
const apiRouter = express.Router();

apiRouter.post("/",getShortenUrl)
apiRouter.post("/custom/:customUrl",InsertCustomUrl)
// in this route we will redirect the url we have creted to long url
apiRouter.get("/:urlId",goToPage)

module.exports = apiRouter;
