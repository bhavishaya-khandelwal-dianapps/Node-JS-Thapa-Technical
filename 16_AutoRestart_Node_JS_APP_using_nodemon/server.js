
//*==================================================================
//* Introduction to package.json :- 
//*=================================================================
//? package.json is a configuration file used in Node.js projects. 

//? It contains metadata about the project and information on project dependencies.

//? Go to your projectfolder and use npm init to initialize the project or to create package.json 

//? Name, Version, Description ("name", "version", "descriptio") :
    //* Specifies the name and version of the project
    //* Helps uniquely identify and version the project.

//? Entry point ("main") :
    //* Specifies the main entry point file for the application.
    //* The file executed when the application starts. 





const http = require("http");

const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.write("<h1> I am a frontend Developer </h1>");
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