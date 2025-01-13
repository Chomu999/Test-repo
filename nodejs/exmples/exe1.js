
const fs = require('fs');

const http = require('http');



//import * as bistor from "./home.html";


// console.log('hi mom');



// console.log('2 ** 4 = ',2 ** 4 );




// fs.rmdirSync('./lol');
//fs.mkdirSync('./someTexts.txt');


//fs.renameSync('./someTexts.txt','./someTexts');

// console.log('folder has removed  !');


// fs.writeFileSync('./lol.txt','lol boi \n c = a^2 * b^2');
// fs.appendFileSync('./lol.txt','lol boi \n c = a^2 * b^2');
//fs.copyFileSync("./lol.txt", "./someTexts");

//fs.renameSync('lol.txt','./someTexts/gg.txt')

//console.log('file name is change has created  !');




// let myData = fs.readFile('./someTexts/gg.txt','utf-8',(err,d)=>{
// return d
// })

let main = fs.readFileSync('./main.js','utf-8');
let ins = fs.readFileSync('./eruda.min.js','utf-8');
let homePage = fs.readFileSync('./home.html','utf-8');


homePage = homePage.replace('{SRC1}',ins);
homePage = homePage.replace('{SRC2}',` ${main}`);

const server = http.createServer((req, res) => {
if (req.url == '/') {

res.writeHead(200);
// response.end('Hello, World!');
res.end(homePage);

}

else if(req.url == '/js'){

res.writeHead(200);
res.end(`<script> ${main} </script>`);

}


else{
res.writeHead(404);
res.end('error 404');
}
});
server.listen(3000);



console.log('server is runnin 3000');
//console.log(myData);
//console.log(ins);

