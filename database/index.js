var mongoose = require("mongoose");
var uri = "mongodb+srv://hanzala:anomno@cluster0-zwkdx.mongodb.net/PROJECT0?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
});

var db = mongoose.connection;

