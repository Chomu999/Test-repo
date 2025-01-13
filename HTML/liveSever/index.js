const fs = require("fs");
const http = require("http");






let file1 = fs.readFileSync('web/web1.html', 'utf-8');
let api = fs.readFileSync('web/Pragraph.json', 'utf-8');

let game1 = fs.readFileSync('../canvas-html/canvas3.html', 'utf-8');

let draw1 = fs.readFileSync('../canvas-html/canvas.html', 'utf-8');

let Rapi = JSON.parse(api);
JSON.stringify(object);

let server = http.createServer((req, res)=>{

if (req.url == '/') {
res.end(file1);
}


else if (req.url == "/draw") {
res.end(draw1);
}

else if (req.url == "/api") {
res.end(Rapi);
}



else if (req.url == "/game") {
res.end(game1);
}


else if (req.url == "/about") {
res.end(Rapi);
}

else{
res.end('<h1 style="font-size:80px; color:red;">404 error page lol \n lol </h1>')}

});


server.listen(8080, '127.0.0.1', ()=>{
console.log('runing server localhost:8080')
});

console.log(api)
console.log(Rapi)

//console.log(game1)