var http = require("http");

http.createServer( (request, response) =>{
 // Send the HTTP header 
 // HTTP Status: 200 : OK
 // Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/plain'});
 
 // Send the response body as "Hello World"
 response.end('Hello World\n');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/');