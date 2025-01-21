//* Environment variables are used to store configuration values like port number, API keys, database URLs, or secrets outside the codebase.

//? Most platforms automatically add PORT environment variable whicj we can use. 

//* You can access environment variables using process.env. Process is a global object available in Node.js

//? To access environment variable, you first have to set in your Operating System. 
    



import express from "express";
import { config } from "dotenv";
config();
const app = express();

app.get("/", (req, res) => {
    res.send("Hello World");
});


const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
    console.log(`Server is running on PORT number ${PORT}`);
});