//*====================================
//* FS PROMISES MODULE - NODE JS :- 
//*====================================
//? The fs/promises module provides a promise-based API for interacting with the filesystem, allowing asynchronous operations to be handled using modern JavaScript features like async/await or .then() chains. It is a part of the fs module in Node.js but designed for those who prefer promises over callback-based or synchronous methods. 




//* Purpose :- asynchronous file operations by using promises 
//? Simplifies asynchronous file operations by using promises and making the code more readable and modern compared to traditional callback-based approaches.



//* Advantages :- 
//? NO need for manual callbacks. 
//? Cleaner and more intuitive asynchronous workflows using async/await. 
//? Suitable for modern JavaScript applications. 



//* Use Cases :- 
//? Reading Files asynchronously in a non-blocking way. 
//? Writing or Appending Data to files without blocking the event loop. 
//? Performing Multiple File Operations sequentially or concurrently with promise chaining. 
//? Handling Errors Gracefully with .catch() or try....catch blocks.



const fs = require("fs");
// const fs = require("fs/promises");
const path = require("path");

const fileName = "fsPromises.txt";
const filePath = path.join(__dirname, fileName);





//! To read files in a the current directory 
const currentDirectory = __dirname;
fs.promises.readdir(currentDirectory)
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log(error);
})









//! To create a new file 
// fs.promises.writeFile(filePath, "Initail Data", "utf-8")
// .then((data) => {
//     console.log("File Creted Successfully");
// })
// .catch((err) => {
//     console.log(err);
// })







//! To read data from that file 
// fs.promises.readFile(filePath, "utf-8")
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.log(error);
// })








//! To append some more data in the created file 
fs.promises.appendFile(filePath, "\nExtra data", "utf-8")
.then((data) => {
    console.log("Data Added Successfully");
})
.catch((error) => {
    console.log(error);
})







//! To delete the created file 
// fs.promises.unlink(filePath)
// .then(() => {
//     console.log("FIle deleted successfully");
// })
// .catch((error) => {
//     console.log(error);
// })






