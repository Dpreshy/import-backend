const mongoose = require("mongoose");
require("dotenv").config();
const url =
  "mongodb+srv://preshy:preshy@cluster0.e2k2p.mongodb.net/importDB?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("database is now connected...!");
});

module.exports = mongoose;
