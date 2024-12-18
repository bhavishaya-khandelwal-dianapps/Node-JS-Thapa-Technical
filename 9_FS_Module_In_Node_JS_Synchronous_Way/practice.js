const fs = require("fs");
const path = require("path");


const fileName = "text.txt";
const filePath = path.join(__dirname, fileName);



// //? Write the file 
const writeFile = fs.writeFileSync(filePath, "This is the intial commit", "utf-8");



// //? Read the file 
// const read = fs.readFileSync(filePath, 'utf-8');
// console.log(read);



// //? Update the file 
// const update = fs.appendFileSync(filePath, "\nNew Line");



// //? Delete the file 
// const deleteFile = fs.unlinkSync(filePath);
// console.log(deleteFile);


//? Rename the file created
let newUpdatedFileName = "updatedText.txt";
let newFilePath = path.join(__dirname, newUpdatedFileName);
const renameFile = fs.renameSync(filePath, newFilePath);
// console.log(renameFile);

console.log(newFilePath);