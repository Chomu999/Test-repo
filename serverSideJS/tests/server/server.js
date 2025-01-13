const http = require("http");
const url = require("url");


const PORT = 3000;


const data=[
{
  name:"bis",
  age:6,
  device:"mobie"
},
{
  name:"bill",
  age:6,
  device:"loptop"
},
{
  name:"dev",
  age:6,
  device:"pc"
},


]


const server = http.createServer((req, res)=>{


//console.log(res);

const parseUrl = url.parse(req.url);
if(parseUrl.pathname === "/"){
res.writeHead(200, {"content-type": "text/html"});
res.end(`
<h1>hi ${Date()}</h1>
`);

}else if(parseUrl.pathname === "/data"){
res.writeHead(200, {"content-type": "application/json"});
res.end(JSON.stringify(data));
}
else if(req.method === "get"){

console.log(parseUrl);
console.log();

}
else{
res.writeHead(404, {"content-type": "text/html"});
res.end(`<h1>page is not founded (/) </h1>`);
}


});

server.listen(PORT, (err)=>{

console.log(`server is hosting it ${PORT}`);

if (err){
console.log(`server throws a err ${err}`);
}

});
