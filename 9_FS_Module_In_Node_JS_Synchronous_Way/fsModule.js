//*================================
//* FS Module - Node JS :- 
//*================================
//? The fs(Fil System) module in Node.js is a core module that allows you to work with the file system, enabling you to read, write, update, delete, and watch files. 




//todo --- Synchronous way of creating file and perform CRUD operations.



//*===========================================================================================================================================================
//* fs.writeFileSync() : Writes data to a file. If the file does not exist, it will be created. If the file exists, it overwrites the content.
//! Syntax : fs.writeFileSync(filePath, data, options);
//? filePath : The file path to write to. 
//? data : The content to write to the file. 
//? options : Optional. Including encoding ('utf8'), mode, or flags. 
//*===========================================================================================================================================================









//*====================================
//* C U R D Opeartions :-  
//*====================================
const fs = require("fs");
const path = require("path");



const fileName = "test.text";
const filePath = path.join(__dirname, fileName);
console.log(filePath);


const writeFile = fs.writeFileSync(
    filePath, 
    "Hi, My name is Bhavishaya Khandelwal, I am a guitarist",
    "utf-8"
);

console.log(writeFile);











//*=======================================================================================
//* fs.readFileSync() : Reads a file's content and returns it as a string or Buffer. 
//! Syntax : const data = fs.readFileSync(filePath, options);
//? filePath : Path of file to read. 
//? options : Optional. Encoding ('utf8') to get data as a string
//*=======================================================================================

const readFile = fs.readFileSync(filePath, "utf-8");

//* console.log(readFile.toString());
console.log(readFile);


//! Use .toString() if working with binary data (Buffer) : For example, if you need the raw binary data and its string representation.








//*==================================================================================================
//* fs.appendFileSync() : Appends data to a file. If the file does not exist, it creates the file. 
//! Syntax : fs.appendFileSync(filePath, data, options);
//? filePath : File path to append to. 
//? data : Content to add to the file.  
//? options : Optional. Encoding options ('utf8') 
//*==================================================================================================

const appendFile = fs.appendFileSync(
    filePath, 
    "\nI love to do coding", 
    "utf-8"
);










//*==========================================================
//* fs.unlinkSync() : Deletes a file by its path. 
//! Syntax : fs.unlinkSync(filePath);
//? filePath : The path of the file to delete. 
//*==========================================================


//* fs.unlinkSync(filePath);










//*==============================================================================
//* Rename File (fs.renameSync()) : Renames a file from one name to another. 
//! Syntax : fs.renameSync(oldPath, newPath);
//? oldPath : Current file path. 
//? newPath : New file path or name. 
//*==============================================================================


const updatedFileName = "updated.txt";
const newFilePath = path.join(__dirname, updatedFileName);
fs.renameSync(filePath, newFilePath);