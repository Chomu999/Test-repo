import http from "http";
import data from "./data.js";


const server = http.createServer((req, res)=>{


//console.log(res);

if(req.method === "GET" && req.url === "/data"){
res.writeHead(200, {"Content-Type": "application/json"});
res.end(JSON.stringify(data));
}else{
res.writeHead(404, {"Content-Type": "application/json"});
res.end(JSON.stringify({msg: "nothing is found"}));
}




});


server.listen(3000, (err)=>{
	if(!!err) console.error(err);
	console.log("server are running at port 3000 ");
});
