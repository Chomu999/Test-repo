const http = require("http");

const serverPort=3000;
const serverFunc=(req, res)=>{

res.end("web app lol")

}

const server=http.createServer(serverFunc);


server.listen(serverPort, (err)=>{
  console.log(`server on running at : localhost:${serverPort}`);
})