var events = require("events");

// console.log(events);

var ee = new events.EventEmitter();
//console.log(ee);


var connetHandler = function connected() {

console.log('connection successful.');

// Fire the data_received event 
ee.emit('data_received');

}

//define
ee.on("connection", connetHandler);

ee.on("data_received", function(){
console.log('data received successfully.');
});

//call
ee.emit("connection");
console.log("program ended");