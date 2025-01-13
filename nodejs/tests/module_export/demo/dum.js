"use-stickt"

// import {ws} from "./";
// var / = require("");

const http = require("http");



const j_data = {
  name: "bill",
  age: 21,
  language: "javascript"
}
const serverPort=3000;
const serverFunc=(req, res)=>{

if(req.url === "/data"){
res.writeHead(200, {"content-type" : "application/json"});
res.end(JSON.stringify(j_data));
}
else{
res.writeHead(404, {"content-type" : "text/plain"});
res.end("not found");
}

}



const server=http.createServer(serverFunc);


server.listen(serverPort, (err)=>{
  if (err) console.log(err);
  console.log(`server on running at : localhost:${serverPort}`);
})

//const ws = new WebSocket();

//console.log(ws);

