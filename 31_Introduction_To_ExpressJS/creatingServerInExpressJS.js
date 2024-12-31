import express from "express";

const app = express();

//* app -> This variable holds the created Express app, which you can use to : 
    //? Define routes (app.get(), app.post(), etc.)
    //? Configure middleware(app.use())
    //? Start the server (app.listen()) 


app.get("/", (req, res) => res.send("<h1>Hello World</h1>"));

app.get("/about", (req, res) => {
    return res.send("<h1>About Page</h1>");
});

app.get("/contact", (req, res) => {
    return res.send(`<h1>Contact Page</h1>`);
});

const PORT = 3002;
app.listen(PORT, () => {
    console.log("Serve is listening...on port number 3002");
});