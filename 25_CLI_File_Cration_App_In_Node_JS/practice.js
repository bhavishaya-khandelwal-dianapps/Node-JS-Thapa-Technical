import readline from "readline";
import fs from "fs";


const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
});

const readTheData = (fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if(err) {
            console.log(err);
        }
        else {
            console.log(data);
        }
    });
};

rl.question("\nEnter file name : ", (fileName) => {
    rl.question("\nEnter the content : ", (data) => {
        fs.writeFile(fileName, data, "utf-8", (err) => {
            if(err) {
                console.log(err);
            }
            else {
                console.log("File Created Successfully");
                readTheData(fileName);
                rl.close();
            }
        });
    });
});