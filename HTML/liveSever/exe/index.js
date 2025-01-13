let fs = require("fs");
let http = require("http");

var msg=['hello biro']

var path = require('path');
var ext = '/[\w\d_-]+\.[\w\d]+$/';



let file1 = fs.readFileSync('web/web1.html', 'utf-8');


let server = http.createServer((req, res)=>{
if (req.url == '/') {
res.end(file1);
}
else if (req.url == "hello") {
res.end('idudududu');
}
else{res.end('idududueooeoe40404040du')}
});


server.listen(8080, '127.0.0.1', ()=>{
console.log('runing server')
});





//creating folder
// fs.mkdirSync('lol');

//fs.writeFileSync('lol/l1.txt',`namste ${msg[0]} hhhhbsjjdjdjd`);


//fs.appendFileSync('lol/l1.txt',`namste ${msg[0]} hhhhbsjjdjdjd`);


// fs.renameSync('lol/l1.txt',"ut.txt");

/*

let file1 = fs.readFileSync('web/web1.html', 'utf-8')

const server = http.createServer((req, res)=>{

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
res.writeHeader(200, {"Content-Type": "text/html"});
res.write(file1);
}
else{
res.end("<h1>this is 404 error page</h1>");
}


});

//server.listen(8080,"198.0.0.1");
server.listen(8080, '25.131.157.18',()=>{

console.log("server is runing");
}); // causes an error




*/


/*

fs.readFile('./web/web1.html',(err, html)=>{
    if (err) {
        throw err; 
    }       
    http.createServer(function(req, res) {
        if(req.url == "/"){
        resp.write(html);  
        resp.end();}
    }).listen(8000);
});
*/



//console.log(file1)

// server.listen(3000, "168.0.0.1", ()=>{
// console.log("server is runing")
// });

