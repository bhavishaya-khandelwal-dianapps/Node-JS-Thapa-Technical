const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const url = require("url");
const crypto = require("crypto");
const { readFile, write, writeFile } = require("fs");


const PORT = 3001;

const serveFile = async (res, getFile, contentType) => {
    try {
        let fileName = path.join(__dirname, getFile);
        const data = await fs.readFile(fileName);
        res.writeHead(200, { "content-type" : `text/${contentType}` });
        res.end(data);
    }
    catch(error) {
        res.writeHead(404, { "content-type" : `text/${contentType}` });
        res.end("404 Page Not Found");
    }
}


const loadLinks = async () => {
    try {
        let fileName = path.join(__dirname, "data/links.json");
        console.log(fileName);
        const data = await readFile(fileName, "utf-8", (err, result) => {

        });
    }
    catch(error) {
        if(error.code === "ENOENT") {
            await writeFile();
        }
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
    else if(req.method == "POST" && req.url == "/shorten") {

        const links = await loadLinks();

        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });
        
        req.on("end", () => {
            console.log(body);
            const { url, shortCode } = JSON.parse(body);

            if(!url) {
                res.writeHead(400, { "content-type" : "text/plain" });
                return res.end("URL is required");
            }

            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");
        })
    }
});


server.listen(PORT, () => {
    console.log("Server is listening on 3001");
});