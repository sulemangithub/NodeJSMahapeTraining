const events = require("events");

let eventEmitter = new events.EventEmitter();

eventEmitter.on("start",function(){
    console.log("start event triggered...");
});

eventEmitter.on("end",function(){
    console.log("end event triggered...");
});

eventEmitter.emit("start");
eventEmitter.emit("end");