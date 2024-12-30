//* File Creation App in Node js 
const fs = require("fs");
const readline = require("readline");
const path = require("path");


const rl = readline.createInterface({
    input : process.stdin, 
    output : process.stdout 
});


const handleInput = (fileName) => {
    fileName = path.join(__dirname, fileName);
    rl.question("Enter the content : ", (content) => {
        fs.writeFile(fileName, content, (err) => {
            if(err) {
                console.log("Some error occured :", err);
            }
            else {
                console.log("File Created Successfully");
            }
            rl.close();
        });
    });
};


const createFile = () => {
    rl.question("Enter File Name : ", handleInput);
};


createFile();