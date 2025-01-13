import os from "os";
import fs from "fs";
import http from "http";
import path from "path";
import net from "net";
import sys from "sys";




import hi, {userData} from "./utils.js";

//console.log(path.parse("./public/index.html"));


hi()

const server = http.createServer((req, res)=>{

	if(req.url === "/"){
	res.writeHead(200, {"content-type" : "text/html"})
	fs.readFile("./public/index.html", "utf-8", (err, data)=>{
	res.end(data);
	});
	}

	else if(req.url === "/data"){
		res.writeHead(200, {"content-type" : "text/json"})
		res.end(JSON.stringify(userData));
	}
	
	


});



//server.listen(3000, (err)=>{
//	console.log("server is hosting at 3000");
//})



// console.log(net);

const s = net.Socket((a, b)=>{
console.log("hi ns");
// console.log(a);
a.end("hi")
});

console.log(s);

// const server2 = net.createServer((a, b)=>{

// //console.log("net server2");
// //b.end("hi")
// //console.log(a);
// a.end("<h1> hi bye app</h1>");
// console.log(server2);
// //console.log(a);



// });


// //console.log(server2);

// server2.listen(5000, (err)=>{
// 	console.log("server2 is hosting at 5000");
// })
