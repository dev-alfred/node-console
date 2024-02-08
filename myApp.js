let express = require("express");
let app = express();
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));
const absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => res.sendFile(absolutePath));

const msg = "Hello json";
app.get("/json", (req, res) => res.json({"message": process.env.MESSAGE_STYLE = "uppercase" ? msg.toUpperCase() : msg.toLowerCase()}));

module.exports = app;
