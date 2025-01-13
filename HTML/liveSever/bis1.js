//this code for importing fs core module ↓
//const fs = require("fs");

//this code for cteate folder ↓ Sync v
//fs.mkdirSync('bkb')


//this code for cteate file ↓ Sync v
//fs.writeFileSync('bkb/gg.txt','what the hell')


//this code for append file ↓ Sync v
//fs.appendFileSync('bkb/gg.txt','what the hell')


//this code for reading file ↓ Sync v
//let out_put=fs.readFileSync('./bkb/gg.txt','utf-8')


//this code for output on console ↓ Sync v
//console.log(out_put)



//this code for removing file ↓ Sync v
//fs.unlinkSync('bkb/gg.txt')


//this code for removing folder ↓ Sync v
//fs.rmdirSync('./bkb')




//now Aync





//this code for cteate folder ↓ Aync v
//fs.mkdir('./bkb',()=>{
//console.log("folder has create")
//})


//this code for cteate file ↓ Aync v
//fs.writeFile('bkb/gg.txt','what the hell',()=>{
//console.log("file has create")
//})


//this code for append file ↓ Aync v
//fs.appendFile('bkb/gg.txt','\nwhat the hell',()=>{
//console.log("file has update")
//})


//this code for reading file ↓ Aync v
//fs.readFile('./bkb/gg.txt','utf-8',(err,data)=>{
//console.log(`file data = ${data}`)
//})

//this code for output on console ↓ Aync v
//console.log(out_put)



//this code for removing file ↓ Aync v
//fs.unlink('bkb/gg.txt',(err)=>{
//console.log(`file has removing ${err}`)
//})


//this code for removing folder ↓ Aync v
//fs.rmdir('./bkb',()=>{
//console.log(`folder has removing error`)
//})
const http = require("http");
const fs = require("fs");
const os = require("os");

//fs.ReadStream(f)


//fs.watchFile

// fs.watchFile(()=>{
// console.log(f)
// },f)

console.log(os.freemem()/1024/1020)

