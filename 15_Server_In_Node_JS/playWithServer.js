const http = require("http");
const url = require("url");
const fs = require("fs");


let server = http.createServer((req, res) => {
    let q = url.parse(req.url, true);
    let fileName = "." + q.pathname;
    fs.readFile(fileName, "utf-8", (err, data) => {
        if(err) {
            res.writeHead(400, { "content-type" : "text/html" });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { "content-type" : "text/html" });
        res.write(data);
        return res.end();
    }) 
});


server.listen(8080, () => {
    console.log("Server is listening...");
});