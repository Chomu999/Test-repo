import * as fs from "fs";

import * as http from "http";

import * as url from "url";

const userData = {
  "a":{
    name:"bis",
    age:15
  },
  "b":{
    name:"akash",
    age:17
  },
};


console.log(userData);
console.log(url);

//console.log(fs);



const server = http.createServer((req, res)=>{

const parseUrl = url.parse(req.url);

if(parseUrl.pathname === "/"){
res.writeHead(200, {"content-type": "text/html"});
fs.readFile("./page.html", "utf-8", (err, data)=>{
res.end(data);
});
}else{
res.writeHead(200, {"content-type": "text/html"});
res.end("error 404 page not found");
}




});


server.listen(3000, (err)=>{


if(err){
console.error("server error", err);
}else{
console.log("server is hosting at 3000 port");
}

});

//console.log(server)
