

const wss =  WebSocket.Server("localhost:3000");
console.log(wss);

// const WebSocket = require('WebSocket');


// const serverPort = 3000;

// const wss = new WebSocket.Server({ port: serverPort });

// wss.on('connection', (ws) => {
//   console.log('Client connected');

//   ws.on('message', (message) => {
//     console.log(`Received message: ${message}`);
//     ws.send(`Echo: ${message}`);
//   });

//   ws.on('close', () => {
//     console.log('Client disconnected');
//   });
// });