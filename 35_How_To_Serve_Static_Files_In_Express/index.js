//* Static files as name mentions are files which don't change, these can be assets images, css, html, font, etc. 


//? Express has middleware named express.static("public") which we can use to serve static files.
    

//* Files in the static directory are accessible via their URL. For instance, if you have an image logo.png in the public folder, you can access it in the browser with http://localhost:3000 /logo.png. 

//? It will handle all files inside the directory provided. 


import express from "express";
import path from "path";

const PORT = 3000;

const app = express();


let staticPath = path.join(import.meta.dirname, "./public");

//* app.use("/public", express.static(staticPath));

app.use(express.static(staticPath));

app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});