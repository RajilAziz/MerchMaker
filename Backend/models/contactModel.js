const { Schema, model } = require("../connection");

const mySchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
});
module.exports = model("contact", mySchema);
