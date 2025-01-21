//*=========================================
//* Path Module - Node JS 
//*=========================================
//? In Node.js, the path module provides utilities for working with file and directory paths. It's a built-in module, so you don't need to install any external package to use it. 


//! Special Node.js Constants :- 
//* __filename 
//? Provides the absolute path of the currently executing file. 


//* __dirname 
//? Provides the absolute directory path of the currently executing file. 

//todo -- NOTE : These are only available in commonJs.










//*============================================
//* Path Module - Features :-  
//*============================================
//! path.parse() : 
//? Returns an object with details about a given path, including root, dir, base, ext, and name. 


//! path.join() : 
//? Joins multiple path segments into one, using the appropriate seperator (\on Windows, \on Linux/macOS).


//! path.resolve() :
//? Resolves a sequence of paths into an absolute path, starting from the current directory. 


//! path.extname() :
//? Extracts the file extension from a given path. 


//! path.basename() :
//? Returns the last part of a path (e.g., file name with extension).


//! path.dirname() :
//? Returns the directory part of a path. 


//! path.sep : 
//? Returns the platform-specific path segment seperator (\for Windows, \for Linux/macOS). 






//* TO DEAL WITH PATH MODULE WE REQUIRE THAT PATH MODULE

const path = require("path");

console.log(__dirname);
console.log();
console.log(__filename);




//* student -> folder/student/data.txt
console.log();
const filePath = path.join("folder", "students", "data.txt");
console.log(filePath);       //? folder/students/data.txt



const parsedData = path.parse(filePath);
const resolvedPath = path.resolve(filePath);
const extName = path.extname(filePath);
const basename = path.basename(filePath);
const dirname = path.dirname(filePath);


console.log({ parsedData, resolvedPath, extName, basename, dirname, seperator : path.sep });
