//*==========================================================
//* ES Module in Node.js :- 
//*==========================================================
//? ES Modules (ECMAScript Modules) allow you to use import and export syntax. 
//? They have been available in Node.js since version 12. 


//? To enable ES Modules, you can either :
    //* Name you file with .mjs extension, or 
    //* Set "type" : "module" in your package.json. (Recommended) 

//? Use import and export instead of require and module.exports 







// import mul from "./math.js";       //? Default Export 
// import { add } from "./math.js";   //? Named Export 
import { mul, div, mod } from "./math.js";


console.log(mul(5, 5));

console.log(div(10, 2));