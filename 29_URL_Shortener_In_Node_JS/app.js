const http = require("http");
const fs = require("fs/promises");
const path = require("path");
const url = require("url");
const crypto = require("crypto");
const { writeFile, link } = require("fs");


const PORT = 3001;
const DATA_FILE = path.join(__dirname, "links.json");


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


const loadLinks = async () => {
    try {
        let data = await fs.readFile(DATA_FILE, "utf-8");
        return JSON.parse(data);
    }
    catch(error) {
        if(error.code === "ENOENT") {
            await fs.writeFile(DATA_FILE, JSON.stringify({}));
            return {};
        }
        throw error;
    }
};


const saveLinks = async (links) => {
    let jsonData = JSON.stringify(links);
    await fs.appendFile(DATA_FILE, jsonData);
};


const server = http.createServer(async (req, res) => {
    if(req.method == "GET") {
        if(req.url == "/") {
            return serveFile(res, "index.html", "html");
        }
        else if(req.url == "/style.css") {
            return serveFile(res, "style.css", "css");
        }
        else if(req.url == "/links") {
            let links = await loadLinks();
            res.writeHead(200, { "Content-Type" : "application/json" });
            return res.end(JSON.stringify(links));
        }
        else {
            let links = await loadLinks();
            let shortCode = req.url.slice(1);
            if(links[shortCode]) {
                res.writeHead(302, { location : links[shortCode] });
            }

            res.writeHead(404, { "Content-Type" : "text/plain" });
            return res.end("Shortened URL is not found");
        }
    }
    else if(req.method == "POST" && req.url == "/shorten") {
        
        //* Getting all the data(links)----------
        let links = await loadLinks();
        
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", async () => {
            console.log(body);
            const { url, shortCode } = JSON.parse(body);
            

            //! If URL not exist------------------
            if(!url) {
                res.writeHead(400, { "Content-Type" : "text/plain" });
                return res.end("URL is required");
            }


            //! To handle the DUPLICATION of data----------
            const finalShortCode = shortCode || crypto.randomBytes(4).toString("hex");

            if(links[finalShortCode]) {
                res.writeHead(400, { "Content-Type" : "text/plain" });
                return res.end("Short Code Already Exists, Please choose another...");
            }

            //! Now, we are adding the data into our links.json file 
            links[finalShortCode] = url;
            await saveLinks(links);
            res.writeHead(200, { "Content-Type" : "application/json" });
            res.end(JSON.stringify({ "success" : "true", "shortCode" : "finalShortCode" }));

        });

        req.on("err", (error) => {
            console.log(error);
        });
    }
});


server.listen(PORT, () => {
    console.log("Server is listening on port number 3001....");
});