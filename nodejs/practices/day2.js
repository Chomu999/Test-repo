import http from "http";


let server = http.createServer((req, res)=>{
res.writeHead(200, {"Content-type": "text/plain"});

res.end("Hello world \n");

});

server.listen(3000, (err)=>{
	if(!err) return -1;
	console.log("server is running at port 3000");
})
