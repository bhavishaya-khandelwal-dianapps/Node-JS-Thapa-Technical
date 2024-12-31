import express from "express";
import { config } from "dotenv";
config();
const app = express();
import { PORT } from "./validatingUsingZodLibrary.js";

app.get("/", (req, res) => {
    res.send("Hello World");
});


// const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("Server is running");
});