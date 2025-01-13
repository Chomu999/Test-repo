const fs = require("fs");
const http = require("http");

//document.title='biswajit side';




let homePage=fs.readFileSync('./home.html','utf-8')

let info=fs.readFileSync('./js/info.js','utf-8')

let customFun=fs.readFileSync('./js/customFun.js','utf-8')

let controll=fs.readFileSync('./js/controll.js','utf-8')

let main=fs.readFileSync('./js/main.js','utf-8')

let inspect=fs.readFileSync('./eruda.min.js','utf-8')

homePage.replace('{taptoplay}','hello bro')


let server = http.createServer((req, res)=>{
if(req.url === '/'){

res.end(homePage);
res.end(`
<script>
${inspect}
</script>`);

res.end(`
<script>
eruda.init();
eruda.get().config.set('displaySize', 60);
</script>
`);

}
else if (req.url === "hello") {
res.end('idudududu');
}
else{
res.end(main)
//res.end(inspect)


}

});


server.listen(8080, ()=>{
console.log('runing server')
});
