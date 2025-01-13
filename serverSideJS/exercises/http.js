const http = require('http');

const MyServer = http.createServer((req, res)=>{


if(req.url === '/'){
res.end('<h1 style="color:tan;">home page</h1>');
}

else if(req.url === '/contect'){
res.end('<h1 style="color:oragen;">contect page</h1>');
}

else if(req.url === '/about'){
res.end('<h1 style="color:blue;">about page</h1>');
}

else if(req.url === '/fun'){
res.end('<h1 style="color:purple;">fun page</h1>');
}

else{
res.end('<h1 style="color:red;">ERORR page</h1>');
//console.log(res)

}

});

MyServer.listen(3000,(err)=>{
console.log('My Server is runing in port no. 3000');

})
