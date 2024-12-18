
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
emitter.emit("updateProfile", "Email");
emitter.emit("updateProfile", "Email");
emitter.emit("updateProfile", "Email");
emitter.emit("updateProfile", "Email");
emitter.emit("updateProfile", "Email");
emitter.emit("updateProfile", "Email");
emitter.emit("summary");