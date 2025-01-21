import express from "express";
import path from "path";
const app = express();
const PORT = 4000;



//* Middleware 1
let staticPath = path.join(import.meta.dirname, "./public");
app.use(express.static(staticPath));



//? This method is used when we are not adding POST method in form tag
//* app.get("/contact", (req, res) => {
//*     console.log(req.query);
//*     res.redirect("/");
//*     // res.send("OK");
//* });



//* Middleware 2
app.use(express.urlencoded({
    extended : true
}));

//? When we add POST method in form tag  
app.post("/contact", (req, res) => {
    
    //* Here we are getting undefined if we don't use express middlewares 
    console.log(req.body);
    res.redirect("/");
});




//* Middeware 3 (To handle unmatched routes) use this middleware always at the end 
app.use((req, res) => {
    let filePath = path.join(import.meta.dirname, "./views/404.html");
    return res.status(404).sendFile(filePath);
}); 


const server = app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});