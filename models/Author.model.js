const mongoose = require("mongoose");
const authorSchema = mongoose.Schema({
  name: String,
  information: String,
});
const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
