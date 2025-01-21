import express from "express";
const app = express();


const server = app.listen(4001, () => {
    console.log("Server is listening on PORT number 4001");
})


app.get("/", (req, res) => {
    res.send("<h1>Hello World</h1>");
});


app.get("/profile/:userName", (req, res) => {
    let userName = req.params.userName;
    res.send(`<h1>${userName}</h1>`);
});



app.get("/profile/:userName/article/:slug", (req, res) => {
    let userName = req.params.userName;
    let slug = req.params.slug;
    slug = slug.replaceAll("_", " ");
    res.send(`<h1>My username is '${userName}' and my article's title is '${slug}'</h1>`);
});