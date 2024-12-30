//*=============================================================
//* Difference between Synchronous and Asynchronous :- 
//*=============================================================

//! Synchronous Code                                       Asynchronous Code
//? Tasks are executed sequentially                        Tasks don't block execution.
//? Each task blocks the next until completed              Usess callbacks, promises, or async/await. 








const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "dsa.cpp");


//* Synchronous task 
console.log("Start");



//* Synchronous task 
const data = fs.readFileSync(filePath, "utf-8");
console.log(data);



//* Asynchronous task 
fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});



//* Synchronous task 
console.log("End");



//? OUTPUT -> Pehle saare synchronous task chal jaayenge and then last mein ek asynchronous code chalega 





const os = require("os");
console.log(os.cpus().length);


//*========================================================
//* Node Js Elements :- 
//*======================================================
//! v8 : 
    //? Google's high-performance JavaScript engine that compiles JavaScript into machine code. 
    //todo --- V8 is for synchronous tasks 


//! Libuv :
    //? A C library that provides Node.js with cross-platform support for ascynchronous I/O operations, file systems, networking, and more.

    //? Includes the "event loop" and "thread pool", enabling non-blocking tasks like file reading, networking, and timers. 
    //todo --- Libuv is for asynchronous tasks