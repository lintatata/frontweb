

const EventEmitter = require("events");
const event = new EventEmitter();
event.on("notice",(message)=>{
    console.log("I have recetived a notice:",message);
})

setTimeout(() =>{

   event.emit("notice","reboot now...")
},2000);
console.log("hello event")

