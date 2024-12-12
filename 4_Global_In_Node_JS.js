//? In node.js, there's no window or document. Why ? Because Node.js runs outside the browser - it doesn't deal with the DOM or browser-specific APIs. 

//? Instead, Node.js has a global object. It's the equivalent of window in the browser but designed for a server-side environment. 


global.console.log("Hello World");






//*========================================
//* globalThis :-
//*========================================
//? globalThis is a new feature introduced in ECMAScript 2020 (ES 11) that provides a standard way to access the global object in any JavaScript environment. 



//! Why it is useful ?
//? Consistent Access : In the past, accessing the global object varied depending on the environment. 
//* 1. Browser : Window
//* 2. Node.js : global 
//* 3. Web Workers : self 
//* 4. Other Environments : Might have their own global objects 







globalThis.console.log(module);


//? Both are same
console.log(globalThis.process);
console.log(process);




//* React is all about your componets
//* Node is all about your module 