const net = require('net');
//1st
// const server = net.createServer((connection)=>{ 
//   console.log('client connected');
   
//   connection.on('end', ()=>{
//       console.log('client disconnected');
//   });
   
//   connection.write('Hello World!\r\n');
//   //connection.pipe(connection);
// });


// server.listen(8080, ()=>{ 
//   console.log('server is listening no 8080');
// });


//2nd
// const clientList=[];
// const server = net.createServer();

// server.on('connection', (client)=>{

// console.log('client connected');

// client.write('Hello World!\r\n')

// clientList.push(client)


// setInterval(()=>{

// clientList.forEach((myC)=>{

// myC.write(`${Math.floor(Math.random() * 100 + 1)}`);

// })

// }, 2000);

// client.on('end', ()=>{
//   console.log('client disconnected');
// });

// })


// server.listen({

// host:'localhost',
// port:8080
// });

//3rd
const clientList=[];
const server = net.createServer();

server.on('connection', (socket)=>{

console.log('client connected');
//socket.write('net1 welcome new user \n')

clientList.push(socket);
console.log(socket)

// socket.emit('data', (data)=>{
// console.log(`data is ${data}`);
// socket.write('data is *')
// socket.write(data)
// })


//setInterval(()=>{
//clientList.forEach((myC)=>{
//myC.write(`${Math.floor(Math.random() * 100 + 1)}`);
//});
//}, 2000);

socket.on('end', ()=>{
  console.log('client disconnected');
});

//socket.on('send', (data)=>{
// socket.write(`${data}`);
// console.log(`${data}`);
//});

//socket.setEncoding('utf8');

});




//setInterval(()=>{

clientList.forEach((myC)=>{

//myC.write(`${Math.floor(Math.random() * 100 + 1)}`);

//myC.emit('send',(data)=>{
//console.log(`${data}`);
//});
//console.log(myC)


})

//}, 2000);



server.listen(8080, ()=>{ 
  console.log('server is listening no 8080');
});

//Reference

// event.on('sayName', (n)=>{
// console.log(n)
// })

// event.emit('sayName',"biswsjit");
