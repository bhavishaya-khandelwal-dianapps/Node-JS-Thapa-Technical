import { createReadStream, createWriteStream } from "fs";
import path from "path";


let inputFilePath = path.join(import.meta.dirname, "input.txt");
let outputFilePath = path.join(import.meta.dirname, "output.txt");



const readableStream = createReadStream(inputFilePath, { 
    encoding : "utf-8", 
    highWaterMark : 10,
});


const writableStream = createWriteStream(outputFilePath);



//? Method 1 
//* Pipe : It connects your readable stream to your writable stream
// readableStream.pipe(writableStream);


//? Method 2 
//* Listen for data chunks
let body = "";
readableStream.on("data", (chunk) => {
    body += chunk;
    console.log("CHUNK : ", chunk);
    writableStream.write(chunk);
});


//* Handle stream end 
readableStream.on("end", () => {
    console.log("File Read completed");
    writableStream.end();
});



//* Handle errors 
readableStream.on("error", (err) => console.log("Error:", err));
writableStream.on("error", (err) => console.log("Error:", err));