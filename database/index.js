let mongoose = require("mongoose");

let BlockChainModel = require("./model");

// Connect to DB
mongoose.connect(
  "mongodb+srv://hanzala:anomno@cluster0.zwkdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
  (err) => {
    if (err) return console.log("Cannot connect to DB");
    console.log("DB is Connected");
    connectionCallback();
  }
);

let connectionCallback = () => {};

module.exports.onConnect = (callback) => {
  connectionCallback = callback;
};
