require("dotenv/config");
const express = require("express");
let database = require("./database");

const app = express();
const postData = require("./Routes/post");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("server is running Now");
});
app.use("/app", postData);

app.set("port", process.env.PORT || 9000);
var server = app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + server.address().port);
});
