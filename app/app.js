require("dotenv").config();
const express = require("express")
const cors = require("cors")
const app = express();
const apiRouter = require("../routes/apiRoutes");
const { corsConfig, rootPath } = require("../config");
// const path = require("path");
// const swaggerJSDoc=require("swagger-jsdoc")
// const swaggerUi=require("swagger-ui-express")

// const options={
//     definition:{
//         openapi:'3.0.0',
//         info:{
//             title:"Shorten Url Project",
//             version:'1.0.0'
//         },
//         servers:[
//             {
//                 url:'http://localhost:8080/api'
//             }
//         ]
//     },

//     apis:['../routes/*.js'],
// }
// const swaggerSpec= swaggerJSDoc(options)
// app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerSpec))
// const publicPath = path.join(rootPath, "client/build")

app.use(cors(corsConfig));
// app.use(express.static(publicPath))

app.use(express.json());


app.use("/api", apiRouter);



module.exports = app;



