// //* Method 1
// const user = require("./exportingModules.js");

// console.log(user.getName());
// console.log(user.getLocation());
// console.log(user.dob);




// //* Method 2 
// const { getName, getLocation, dob } = require("./exportingModules.js");

// console.log(getName());
// console.log(getLocation());
// console.log(dob);




// //* Method 3 Importing a default value 
// const User = require("./exportingModules.js");

// const user1 = new User("Bhavishaya_kh", 22, "bhavishaya.khandelwal@dianapps.com");

// console.log(user1.getUserStats());





//* Method 4  
const { getName, dob, getLocation } = require("./exportingModules.js");

console.log(getName());
console.log(getLocation());
console.log(dob);