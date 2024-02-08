let express = require("express");
let app = express();
console.log("Hello World");
const absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => res.sendFile(absolutePath));

app.use(express.static(__dirname + "/public"));

module.exports = app;
