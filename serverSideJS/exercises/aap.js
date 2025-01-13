const myModule=require('./example.js').modules;
const http = require('http');
const fs = require('fs');

//console.log(myModule)
//console.log(myModule.add(3,9))



const MyServer = http.createServer((req, res)=>{

if(req.url === '/'){
res.end(`
<body>

<h1 id="output">home page</h1>


</body>
`);
}

else if(req.url === '/contect'){
res.end('<h1 style="color:orange;">contect page</h1>');
}

else if(req.url === '/about'){
res.end('<h1 style="color:blue;">about page</h1>');
}

else if(req.url === '/fun'){
res.end('<h1 style="color:purple;">fun page</h1>');
}

else if(req.url === '/MySave'){
res.end(`
<body>

<h1 id="output">MySave Server page</h1>


</body>
`);

let mgs='';
for(const i in res) mgs+= i+'\n';


fs.writeFile('ServerText.json',mgs,(err)=>{
console.log('Server notice');
})
}


else{
res.end('<h1 style="color:red;">ERORR page</h1>');
//console.log(res)

}

});

MyServer.listen(3000,(err)=>{
console.log('My Server is runing in port no. 3000');

})


//const mydata=getData('./aap.js');
