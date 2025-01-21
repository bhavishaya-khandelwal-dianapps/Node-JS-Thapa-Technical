//* Method 1 of getting a Router 
// import { Router } from "express";



//* Method 2 of getting the router  
import express from "express";
const router = express.Router;



router.get("/", (req, res) => {
    res.send("<h1>Hello from Router</h1>");
});



//* Default export 
// export default Router;



//* Named Export  
export const outRouter = router;