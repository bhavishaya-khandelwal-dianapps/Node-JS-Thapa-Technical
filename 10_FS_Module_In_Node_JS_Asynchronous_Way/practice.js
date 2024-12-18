const fs = require("fs");
const path = require("path");

const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);



//? Create a new file
// fs.writeFile(filePath, "THis is the initial data", "utf-8", (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("A new file is created");
//     }
// })



//? Read the created file 
// fs.readFile(filePath, "utf-8", (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log(data);
//     }
// });




//? Upadte the data 
// fs.appendFile(filePath, "\nThis is the second line", "utf-8", (err) => {
//     if(err) console.log(err);
//     else console.log("File is updated");
// })




//? Delete the created file 
// fs.unlink(filePath, (err) => {
//     if(err) {
//         console.log(err);
//     }
//     else {
//         console.log("File is deleted");
//     }
// })