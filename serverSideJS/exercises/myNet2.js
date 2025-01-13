const net = require('net');

//1st
// const client = net.connect({port: 8080}, ()=>{
//   console.log('connected to server!');  
// });

// client.on('data', (data)=>{
//   console.log(data.toString());
   
//   //client.end();
// });


//2nd
// const client=net.createConnection({port:8080});


// client.on('data',(data)=>{

// console.log(`message received form server ${data}`);

// })

//3rd
//const client=net.createConnection({port:8080});
const client=net.connect({port:8080},()=>{


console.log(`connect to server`);


});


client.on('data', (data)=>{

console.log(`net2 message received form server ${data}`);


});

//console.log(client);


//client.send("user biswsjit");
client.on("send", (d)=>{
//d.port('gggg')
console.log('d :',d)
})
//(server)=>{

//console.log(server)

//});
