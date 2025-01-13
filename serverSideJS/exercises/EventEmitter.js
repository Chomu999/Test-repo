const EventEmitter = require('events');

const event = new EventEmitter();


event.on('sayName', (n)=>{
console.log(n)
})

event.emit('sayName',"biswsjit");
