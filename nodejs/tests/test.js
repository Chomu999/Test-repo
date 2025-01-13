import * as EVENTS from "events";



const event = new EVENTS.EventEmitter()


event.on("hi", (alo)=>{
console.log(alo, "hello nodejs");
});



event.emit("hi", "bisu");

