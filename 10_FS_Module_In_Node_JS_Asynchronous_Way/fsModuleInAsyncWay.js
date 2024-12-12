//*=======================================
//* FS Module - CRUD Operations :- 
//*=======================================
//! Create (fs.writeFile)
//? Writes content to the file. If the file does not exist, it creates one. 


//! Read (fs.readFile) 
//? Reads the content of the file asynchronously and logs it. 


//! Update (fs.appendFile) 
//? Appends new content to the file without overwriting the existing content. 



//! Delete (fs.unlink) 
//? Deletes the file completely. 



const fs = require("fs");
const path = require("path");






//*=============================================================================================
//* fs.writeFile() : Writes data to a file, replacing the file if it is already exists. 
//! Syntax : fs.writeFile(path, data, options, callback);

//? path : File path to write to. 
//? data Content to write. 
//? options : Optional. Specifies encoding ('utf-8'), mode, or flag. 
//? callback : A function with an err parameter. 
//*=============================================================================================



const filePath = path.join(__dirname, "text.txt");
fs.writeFile(filePath, "This is the initial data", "utf-8", (err) => {
    if(err) {
        console.error(err);
    }
    else {
        console.log("File has been saved");
    }
});








//*===========================================================================================================
//* fs.readFile() : Reads the content of a file asynchronously and returns the data as a buffer or string. 
//! Syntax : fs.readFile(path, options, callback);

//? path : File path to read from. 
//? options : Optional. An object or string specifying the encoding ('utf-8') or flag ('r' for reading).
//? callback : A function with parameters (err, data).
//*===========================================================================================================

fs.readFile(filePath, "utf-8", (err, data) => {
    if(err) {
        console.error(err);
    }
    else {
        console.log(data);
    }
});










//*===========================================================================================================
//* fs.appendFile() : Appends data to a file. If the file doesn't exist, it is created.  
//! Syntax : fs.appendFile(path, data,options, callback);

//? path : File path to append to. 
//? options : Optional. An object or string specifying the encoding ('utf-8') or flag ('r' for reading).
//? callback : A function with parameters. 
//*===========================================================================================================

fs.appendFile(
    filePath, 
    "\nThis is the Upadted Data", 
    "utf-8", 
    (err) => {
        if(err) {
            console.error(err);
        }
        else {
            console.log("File has been saved");
        }
    }
);











//*======================================================
//* fs.unlink() : Deletes a file asynchronously. 
//! Syntax : fs.unlinkFile(path, callback);
//*======================================================

fs.unlink(filePath, (err) => {
    if(err) {
        console.error(err);
    }
    else {
        console.log("File has been deleted");
    }
});
