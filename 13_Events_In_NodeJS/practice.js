const EventEmitter = require("events");

const emitter = new EventEmitter();




//? Example 1
emitter.addListener("greet", () => {
    console.log("Hello World");
});

emitter.emit("greet");






//? Example 2 
emitter.on("hello", (myName) => {
    console.log(`Hello ${myName}`);
})

emitter.emit("hello", "Bhavishaya");





//? Example 3 
emitter.addListener("click", (args) => {
    console.log(args.name);
    console.log(args.clg);
})

emitter.emit("click", {name : "Bhavishaya Khandelwal", clg : "Govt. Engineering College, Ajmer"});






//? Example 4 
