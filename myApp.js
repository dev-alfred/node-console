let express = require("express");
let app = express();
console.log("Hello World");

app.use("/public", express.static(__dirname + "/public"));
const absolutePath = __dirname + "/views/index.html";
app.get("/", (req, res) => res.sendFile(absolutePath));

const msg = "Hello json";
const msg_style = process.env.MESSAGE_STYLE;

app.get("/json", (req, res) => {
  const responst =
    msg_style.toLowerCase() === "uppercase"
      ? msg.toUpperCase()
      : msg.toLowerCase();

  res.json({
    message: responst,
  });
});

module.exports = app;
