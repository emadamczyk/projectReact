const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incidentSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  type: String,
  description: String,
  date: { type: Date, default: Date.now }
});

const Incident = mongoose.model("Incident", incidentSchema);

module.exports = Incident;
