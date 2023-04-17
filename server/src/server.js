const express = require("express");
const server = express();

const routes = require("./router/index");

const morgan = require("morgan");
server.use(express.json());

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });


 server.use("/rickandmorty", routes);

 server.get("/",(req,res)=>{
    res.status(200).json({message: "in first server in EXPRESS", app: "BUCARAMANGA"})
})

module.exports = server;