const http = require("http");
const url = require("url");

let server = http.createServer((req, res) => {
    res.writeHead(200, { "content-type" : "text/html" });
    let q = url.parse(req.url, true).query;
    let txt = q.year + " " + q.month;
    console.log(url.parse(req.url));
    res.end(txt);
});

server.listen(3020, () => {
    console.log("Server is started....");
})