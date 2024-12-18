const fs = require("fs");
const path = require("path");


const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);




const readTheFilesOfCurrWorkingDirectory = async () => {
    try {
        const response = await fs.promises.readdir(__dirname);
        console.log(response);
    }
    catch(error) {
        console.log(error);
    }
}

// readTheFilesOfCurrWorkingDirectory();







//? Create a new file
const createANewFile = async () => {
    try {
        await fs.promises.writeFile(filePath, "This is a new file", "utf-8");
        console.log("File Created successfully");

    }
    catch(error) {
        console.log(error);
    }
}





//? Read the data of created file 
const readTheData = async () => {
    try {
        const data = await fs.promises.readFile(filePath, "utf-8");
        console.log(data);
    }
    catch(error) {
        console.log(error);
    }
}





//? Update the data 
const updateTheData = async () => {
    try {
        await fs.promises.appendFile(filePath, "\nNew LIne", "utf-8");
        console.log("File Updated");
    }
    catch(error) {
        console.log(error);
    }
}





//? Delete the file 
const deleteTheFile = async () => {
    try {
        await fs.promises.unlink(filePath);
        console.log("File deleted Successfully");
    }
    catch(error) {
        console.log(error);
    }
}




createANewFile();