const fs = require('fs');
const http = require('http');



const MyServer = http.createServer((req, res)=>{



if(req.url === '/'){

fs.readFile('./public/index.html','utf-8',(err,data)=>{
if(err) console.error('maybe file is not found or incorrot file name',err);
//res.write()
res.end(data)

});


}



// else if(req.url === '/contect'){
// res.end('<h1 style="color:oragen;">contect page</h1>');
// }

// else if(req.url === '/about'){
// res.end('<h1 style="color:blue;">about page</h1>');
// }

// else if(req.url === '/fun'){
// res.end('<h1 style="color:purple;">fun page</h1>');
// }



else{
res.end('<h1 style="color:red;">ERORR page</h1>');
//console.log(res)
}

});



//MyServer starting

MyServer.listen(3000,(err)=>{
console.log('My Server is runing in port no. 3000');
})







// console.log(http);

// fs.mkdir('public/game/paid',(err)=>{
// console.log('folder is create lol',err);
// });


// fs.rmdir('public',(err)=>{
// console.log('folder is delete lol',err);
// });







// fs.writeFile('lol.txt','lol today',(err)=>{
// console.log('file is create lol');
// });


// fs.appendFile('lol.txt','\n data is append lol today\n',(err)=>{
// console.log('appendin data lol');
// });

// fs.readFile('lol.txt','utf-8',(err,data)=>{
// let dd = data;
// //dd = dd.replaceAll('l','L');
// console.log(dd);
// });


// fs.rename('lol.txt','mylol.txt',(err)=>{
// console.log('file is renamed');
// });

// fs.unlink('mylol.txt',(err)=>{
// console.log('delete file',err);
// });


//console.log(fs);
