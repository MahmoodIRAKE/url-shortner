const express = require("express");
const {getShortenUrl,goToPage,InsertCustomUrl}= require('../controllers/urlController')
const apiRouter = express.Router();

apiRouter.post("/",getShortenUrl)
apiRouter.post("/custom/:customUrl",InsertCustomUrl)


apiRouter.get("/:urlId",goToPage)

module.exports = apiRouter;
