require("dotenv/config");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

let database = require("./database");

// const postData = require("./Routes/post");
const stripe = require("./Routes/stripe");
const port = process.env.PORT || 9000;
const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "5000kb" }));
app.get("/", (req, res) => {
  res.send("Server is Running Now");
});
app.use("/appBlockchain", postData);
app.use("/appStripe", stripe);

app.set("port", port);
var server = app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + server.address().port);
});
