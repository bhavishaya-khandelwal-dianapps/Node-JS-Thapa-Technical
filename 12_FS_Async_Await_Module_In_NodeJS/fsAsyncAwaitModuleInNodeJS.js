//*======================================
//* FS ASYNC AWAIT MODULE - NODE JS :- 
//*======================================

const fs = require("fs");
const path = require("path");


const fileName = "asyncFile.txt";
const filePath = path.join(__dirname, fileName);








//! To get all the files in the current directory
const readFolder = async () => {
    try {
        const res = await fs.promises.readdir(__dirname);
        console.log(res);
    }
    catch(error) {
        console.error(error);
    }
}
// readFolder();









//! Create a new file 
const writeFileExample = async () => {
    try {
        await fs.promises.writeFile(filePath, "Initial Data is nothing", "utf-8");
        console.log("FIle is created");
    }
    catch(error) {
        console.error(error);
    }
}

// writeFileExample();








//! Append some more data 
const appendData = async () => {
    try {
        await fs.promises.appendFile(filePath, "\nSome more data", "utf-8");
        console.log("Data Added Successfully");
    }
    catch(error) {
        console.error(error);
    }
}

// appendData();









//! To delete that file 
const deleteTheCreatedFile = async () => {
    try {
        await fs.promises.unlink(filePath);
        console.log("File Deleted successfully");
    }
    catch(error) {
        console.error(error);
    }
}
// deleteTheCreatedFile();