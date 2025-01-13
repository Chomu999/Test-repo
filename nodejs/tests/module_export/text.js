console.log(window);
const {crypto} = window;

const textEncoder = new TextEncoder();

const myPassWord = "0123456789";

const uuid = "fcc15866-48bc-48a5-85bd-27eeaf092d61";


const arrBuff1 = new Uint16Array([0xff, 0x8f]);



//crypto.randomUUID()


console.log(textEncoder.encode("hi hello"));

console.log(uuid);
console.log(crypto.getRandomValues(arrBuff1));
console.log(crypto);







//const cropry = require("fs");


// const fs = require("fs");
// const http = require("http");

// const serverPort = 3000;

// const serverFunc=(req, res)=>{

// res.end("web page node App");

// if(req.url === "/test"){
// console.log(req.url);
// fs.writeFileSync("./log/server/report.txt", JSON.parse(req);, (err)=>{

// });


// }


// }


// const server = http.createServer(serverFunc);

// server.listen(serverPort, (err)=>{

// if (err) console.log(`server side error ${err}`);
// console.log(`server is running at : ${serverPort}`);


// })

