let express = require("express");
let app = express();
console.log("Hello World");
app.use(express.static(__dirname);
const absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => res.sendFile(absolutePath));



module.exports = app;
