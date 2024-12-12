//? Challenge : "Event Maestro : Handle It All!"



//! Objective 
//* Create a progrsm using Node.js EventEmitter that :

//? Listens for multiple types of user events (e.g., login, logout, purchase, and profile update). 
//? Tracks how many times each event is emitted. 
//? Logs a summary of all event occurrences when a special summary event is triggered. 



//! Requirements 

//? Create at least four custom events (e.g. user-login, user-logout, user-picture, profile-update).
//? Emit these events multiple times with different arguments (e.g., username, item purchased). 
//? Track and store the count of each event type. 
//? Define a summary event that logs a detailed report of how many times each event was triggered. 



const EventEmitter = require("events");
const emitter = new EventEmitter();

const eventCounts = {
    "user-login" : 0, 
    "user-logout" : 0, 
    "user-purchase" : 0, 
    "profile-update" : 0, 
};


emitter.on("login", (userName) => {
    console.log(`${userName} is logged in`);
    eventCounts["user-login"]++;
});

emitter.on("logout", (userName) => {
    console.log(`${userName} is logged out`);
    eventCounts["user-logout"]++;
});

emitter.addListener("purchase", (item) => {
    console.log(`New ${item} is purchased`);
    eventCounts["user-purchase"]++;
});

emitter.on("updateProfile", (something) => {
    console.log(`${something} is updated`);
    eventCounts["profile-update"]++;
});

emitter.on("summary", () => {
    console.log(eventCounts);
})


emitter.emit("login", "Bhavishaya");
emitter.emit("logout", "Bhavishaya");
emitter.emit("purchase", "Laptop");
emitter.emit("updateProfile", "Email");
emitter.emit("logout", "Bhavishaya");
emitter.emit("purchase", "Laptop");
emitter.emit("logout", "Bhavishaya");
emitter.emit("purchase", "Laptop");
emitter.emit("logout", "Bhavishaya");
emitter.emit("purchase", "Laptop");
emitter.emit("login", "Bhavishaya");
emitter.emit("login", "Bhavishaya");
emitter.emit("login", "Bhavishaya");
emitter.emit("summary");