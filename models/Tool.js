const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const toolSchema = new Schema({
  toolName: { type: String, required: true },
  price: { type: String, required: true },
  description: String,
  imageUrl: String, 
  datePosted: { type: Date, default: Date.now }
});

const Tool = mongoose.model("Tool", toolSchema);

module.exports = Tool;
