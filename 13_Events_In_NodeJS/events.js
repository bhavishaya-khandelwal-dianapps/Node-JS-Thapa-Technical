//* Import EventEmitter class 
const EventEmitter = require("events");


//* Create an instance of EventEmitter 
const emitter = new EventEmitter();





//* 1. Define an event listener (addListener) 
emitter.on("greet", () => {
    console.log("Bhavishaya Khandelwal");
});



//* 2. Trigger (emit) the "greet" event
emitter.emit("greet");





//* We can also pass the argument 
emitter.addListener("showInfo", (userName, profession, company) => {
    console.log(`My name is ${userName} and I am a ${profession} at ${company}`);
});



emitter.emit("showInfo", "Bhavishaya Khandelwal", "Software Engineer Trainee", "DianApps Technologies Private Limited");











//! but it's best idea to take a single argument as an object. 
emitter.on("showUserDetails", (obj) => {
    console.log(`My name is ${obj.name} and I am a ${obj.prof} at ${obj.company}`);
});

emitter.emit("showUserDetails", { 
    name : "Bhavishaya Khandelwal", 
    prof : "Software Engineer Trainee", 
    company : "DianApps"
});