//*=======================================
//* HTTP Module - Node JS :- 
//*=======================================
//? The http module in Node.js allows developers to create an HTTP server and handle client requests and server responses. It provides methods and properties to work with HTTP requests and responses, enabling the creation of REST APIs, web pages, and other networked applications.




//? A web server is software or hardware that serves web content (HTML, CSS, JavaScript, etc.) to clients (usually browsers) over the interbet or an intranet. It uses protocols like HTTP/HTTPS to handle requests and responses.



const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("<h1> I am a Backend Developer </h1>");
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