const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const url = require("url");


const PORT = 3001;


const serveFile = async (res, getFile, contentType) => {
    try {
        let fileName = path.join(__dirname, getFile);
        let data = await fs.readFile(fileName);
        res.writeHead(200, { "Content-Type" : `text/${contentType}` });
        res.end(data);
    }
    catch(error) {
        res.writeHead(404, { "Content-Type" : `text/${contentType}` });
        res.end("404 Page Not Found");
    }
};


const server = http.createServer(async (req, res) => {
    if(req.method == "GET") {
        if(req.url == "/") {
            return serveFile(res, "index.html", "html");
        }
        else if(req.url == "/style.css") {
            return serveFile(res, "style.css", "css");
        }
    }
});


server.listen(PORT, () => {
    console.log("Server is listening on port number 3001....");
});