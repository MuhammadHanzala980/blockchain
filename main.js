require("dotenv/config");
const express = require("express");
let database = require("./database");

const app = express();
const postData = require("./Routes/post");
const cors = require("cors");
const stripe = require("./Routes/stripe");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Server is Running Now");
});
app.use("/app", postData);
app.use("/payment", stripe);

app.set("port", process.env.PORT || 9000);
var server = app.listen(app.get("port"), function () {
  console.log("Express server listening on port " + server.address().port);
});
