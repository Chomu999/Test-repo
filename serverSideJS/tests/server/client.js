const http = require("http");
const url = require("url");


console.log("break");

console.log(url);

console.log(http);

console.log("break");



async function main() {

const a = url.parse("http://localhost:3000/data");
console.log(a);

const d = await fetch(a.href);
console.log(d);
const fd = await d.text();
console.log(JSON.parse(fd))


}

main();