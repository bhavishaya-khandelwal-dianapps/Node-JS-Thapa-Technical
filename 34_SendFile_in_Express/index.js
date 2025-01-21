import express from "express";
import path from "path";
import { config } from "dotenv";
config();

const app = express();

const PORT = process.env.PORT || 3000;



app.get("/", (req, res) => {
    let filePath = path.join(import.meta.dirname, "./index.html");
    res.sendFile(filePath);
});


app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});