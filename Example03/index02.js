
const events = require("events");

class Classroom
{
    constructor()
    {
        this.eventEmitter = new events.EventEmitter();
        this.eventEmitter.on("doorOpened",this.switchOnLights);
        this.eventEmitter.on("doorClosed",this.switchOffLights);
    }

    switchOnLights()
    {
        console.log("Lights are switched on...");
    }

    switchOffLights()
    {
        console.log("Lights are switched off...");
    }

    doorOpen()
    {
        this.eventEmitter.emit("doorOpened");
    }

    doorClose()
    {
        this.eventEmitter.emit("doorClosed");
    }
}

module.exports = new Classroom();