const { MONGO_URL, PORT  } = process.env;

const rootPath = ''
const baseUrl="https://localhost:3000/"
const corsConfig = {
    origin:["http://localhost:3000", "https://localhost:3000"]
}

module.exports ={MONGO_URL, PORT, corsConfig,rootPath,baseUrl}