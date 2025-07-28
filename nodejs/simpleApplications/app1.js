import http from "http";
import url from "url";

//url
//URLSearchParams, parse, Url, pathToFileURL, fileURLToPath,
const handleServer=(req, res)=>{

//console.log(req)

let urlSP =new URLSearchParams(req.url);



//console.log(_au);

const parseURL = url.parse(req.url);

//console.log("parse", parseURL)

if(parseURL.pathname === "/"){
res.writeHead(200, {"Content-Type":"text/html"} ); 
res.end("<h1>welcome to nodejs home</h1>");
}

if(parseURL.pathname === "/data" && req.method === "GET"){
//console.log(req.method);
//let result = parseURL.query;

let fd="";
urlSP.forEach(data=>{
fd += data;
});
res.writeHead(200, {"Content-Type":"text/html"} );
res.end(`<h1>here the result  ${fd} </h1>`);
}


if(req.url === "/data" && req.method === "POST"){
console.log("bill ");
console.log(parseURL);
console.log(urlSP);
console.log(req.method);
console.log(req.url);

//console.log(req.toJson())

console.log(req.read());
// console.log(req.statusCode);

for (let i in req){
console.log(i)
}

res.writeHead(200, {"Content-Type": "text/html"});
res.end(`<h1>data recived</h1>`);




}

}

const server = http.createServer(handleServer);

//console.log(server);

server.listen(3000, (err)=>{
if(err) throw Error(err)
console.log("server is running at port 3000");
});