import express from "express";
import path from "path";
import { someImportantFunction, someAnotherFunction } from "./controllers/simple.controller.js";
import { updateData } from "./models/simple.model.js";

const app = express();


const PORT = 4000;


let staticPath = path.join(import.meta.dirname, "./public");
app.use(express.static(staticPath));


app.use(express.urlencoded({
    extended : true
}));

app.post("/contact", (req, res) => {
    console.log(req.body);
    res.redirect("/");
});


app.set("view engine", "ejs");

app.get("/report", (req, res) => {

    const student = [
        {
            name : "Bhavishaya Khandelwal", 
            grade : "B.Tech 8th Semester", 
            favoriteSubject : "DSA",
        }, 
        {
            name : "Rayan Shahara", 
            grade : "B.Tech 6th Semester", 
            favoriteSubject : "OS",
        }, 
        {
            name : "Aditi Pawar", 
            grade : "B.Tech 8th Semester", 
            favoriteSubject : "DIP",
        },
        {
            name : "Karan Basandani", 
            grade : "B.Tech 8th Semester", 
            favoriteSubject : "DSA",
        }
    ];

    //* res.render("report", {
    //*     name : "Bhavishaya Khandelwal"
    //* });

    res.render("report", { student } );

});


app.get("/function", (req, res) => {
    res.send(someImportantFunction());
});

app.get("/anotherFunction", (req, res) => {
    res.send(someAnotherFunction());
});

app.get("/update", (req, res) => {
    res.send(updateData());
});

app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});