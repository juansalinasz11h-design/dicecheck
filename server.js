const http = require("http");
const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "index.hta");
const body = fs.readFileSync(file);

const server = http.createServer(function (req, res) {
  res.writeHead(200, {
    "Content-Type": "application/hta",
    "Cache-Control": "no-store"
  });
  res.end(body);
});

server.listen(process.env.PORT || 3000);
