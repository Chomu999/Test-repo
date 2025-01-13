let fs = require("fs");
let http = require("http");

var msg=['hello biro']

// var path = require('path');
// var ext = '/[\w\d_-]+\.[\w\d]+$/';



let file1 = fs.readFileSync("./web/web1.html");

let server=http.createServer((req, res)=>{

if (req.url == "/") {
res.end("<h1>this is home</h1>");
}

else if (req.url == "/service") {
res.end("<h1>this is service</h1>");
}

else if (req.url == "/contact") {
res.end("<h1>this is contact</h1>");
}

else if (req.url == "/about") {
res.end("<h1>this is about</h1>");
}

else if (req.url == "/me") {
res.end(file1);
}

else{
res.end("<h1>this is 404 error page</h1>");
}
});



server.listen(8080, '127.0.0.1', ()=>{
console.log('runing server')
});

console.log(file1.toString())
