import express from "express";
const app = express();



app.get("/product", (req, res) => {
    console.log(req.query);
    res.send(`
        <div>
            <h1>Product Page</h1>
            <h2>Mobile = ${req.query.search}</h2>
            <h2>Quantity = ${req.query.limit}</h2>
            <h2>Page No. = ${req.query.page}</h2>
        </div>
    `);
});


app.listen(4002, () => {
    console.log(`Server is listening on PORT number 4002`);
});

