//*==========================================================
//* Auto re-start node app without nodemon :- 
//*==========================================================
//? Start any node application using (node --watch server.js)



const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("<h1> I am a  Developer </h1>");
        res.end();
    }
    if(req.url === "/source") {
        res.write("THis is a source page");
        res.end();
    }
    if(req.url === "/contact") {
        res.setHeader("Content-Type", "text/plain");
        res.write("THis is a contact page");
        res.end();
    }
});  //? Exactly we can say this server as Event Emitter (Behind the scene ye eventEmitter hi hai)



// server.addListener();
// server.emit();


const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Listening on PORT ${PORT}`);
});




//? node --watch server.js