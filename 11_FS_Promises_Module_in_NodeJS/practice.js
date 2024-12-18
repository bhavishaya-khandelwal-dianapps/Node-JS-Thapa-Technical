const fs = require("fs");
const path = require("path");


const fileName = "test.txt";
const filePath = path.join(__dirname, fileName);










//? Read the files in the current directory
fs.promises.readdir(__dirname)
.then((data) => {
    console.log(data);
    return data;
})
.catch((error) => {
    console.log(error);
})






//? Create a new file 
// fs.promises.writeFile(filePath, "This is a new file", "utf-8")
// .then((data) => {
//     console.log(data);
//     return data;
// })
// .catch((error) => {
//     console.log(error);
// })




//? Read the data of newly created file
// fs.promises.readFile(filePath, "utf-8")
// .then((data) => {
//     console.log(data);
//     return data;
// })
// .catch((error) => {
//     console.log(error);
// })




//? Update the file 
// fs.promises.appendFile(filePath, "\nThis is a new line 2", "utf-8")
// .then((data) => {
//     console.log(data);
//     return data;
// })
// .catch((error) => {
//     console.log(error);
// })






//? Delete the file 
// fs.promises.unlink(filePath)
// .then((data) => {
//     console.log("File is deleted");
//     return data;
// })
// .catch((error) => {
//     console.log(error);
// })