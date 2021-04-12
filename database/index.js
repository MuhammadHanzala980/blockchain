// let mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb+srv://hanzala:anomno@cluster0.zwkdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
//   {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
//   },
//   (err) => {
//     if (err) return console.log("Cannot connect to DB");
//     console.log("DB is Connected");
//     connectionCallback();
//   }
// );

// let connectionCallback = () => {};

// module.exports.onConnect = (callback) => {
//   connectionCallback = callback;
// };
let BlockChainModel = require("./model");

var mongoose = require("mongoose");
var uri = "mongodb+srv://hanzala:anomno@cluster0.zwkdx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

var db = mongoose.connection;
