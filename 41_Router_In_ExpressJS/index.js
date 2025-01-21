import express from "express";
import { outRouter } from "./routes/simple.routes.js";


const app = express();

const PORT = 4000;


app.use(express.static());
app.use(express.urlencoded({
    extended : true
}));


app.use(outRouter);


app.listen(PORT, () => {
    console.log(`Server is listening on PORT number ${PORT}`);
});