//*========================================
//* Modules in Node.js :-
//*========================================
//! Self contained code unit : 
//? Each file in Node.js is treated as a seperate module.
//? Variables, functions, or objects defined one file are not accessible in another file by default unless you explicitly export them. 



//! Encapsulation :
//? Node.js uses the CommonJS module system (module.exports and require) to ensure the code in one file does not pollute or interfere with the global scope. 
//? This makes your code modular, maintainable, and easier to debug. 




//*========================================
//* What Exactly is a Module in Node.js :-
//*========================================
//? A module in Node.js represents a file containing code that is self-contained, reusable, and encapsulated. 

//? Node.js uses the CommonJS module system. 

//? This module system came before ES modules was introduced in JavaScript, that's why its syntax is different. 

//? Modules in Node.js are created by defining seperate files for different functionalities. 

//? You must export anything you want to make accessible to other module. 





//! Method 1 : Common JS 
const add = require("./math.js");

console.log(add(5, 10));