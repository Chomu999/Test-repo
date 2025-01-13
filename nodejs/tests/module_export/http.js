const fs = require("fs");
const http = require("http");

const serverPort = 3000;

const serverFunc=(req, res)=>{

res.end("web page node App");

if(req.url === "/test"){
console.log(req.url);
fs.writeFileSync("./log/server/report.txt", JSON.parse(req);, (err)=>{

});


}


}


const server = http.createServer(serverFunc);

server.listen(serverPort, (err)=>{

if (err) console.log(`server side error ${err}`);
console.log(`server is running at : ${serverPort}`);


})

