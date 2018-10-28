const app = require("./app");
const http = require("http");
let server = http.createServer(app);

server.listen(1200);
