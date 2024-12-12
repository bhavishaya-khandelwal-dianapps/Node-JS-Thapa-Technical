//*==================================================
//* Module.export :- 
//*==================================================
//? module.exports is a single object or value. 

//? When you are reassign module.exports (e.g. module.exports = add), it completely replaces whatever was previously assigned. 

//? If you reassign it again (module.exports = mult), the previous value (add) is replaced with mult. 






//*==================================================
//* Key Takeaways :- 
//*==================================================
//? Avoid mixing module.export and exports.property incorrectly. If you reassign module.exports, it will override any previous exports.property assignments. 

//? Use consistent syntax for clarity :
    //* Assign everything at once with module.exports = { ... }.
    //* Or assign properties individually with module.exports.property.





//! Method 1 : For importing  
//* const { add, mul, sub, div, PI } = require("./math.js");


//! Method 2 : For importing
const math = require("./math.js");


console.log(math.add(23, 27));
console.log(math.mul(3, 3));
console.log(math.sub(5, 2));
console.log(math.div(15, 3));
console.log(math.PI.toFixed(3));
console.log(math.mul(4, 4));