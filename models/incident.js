const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const incidentSchema = new Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  type: String,
  location: String,
  description: String,
  lat: String,
  lng: String,
  date: { type: Date, default: Date.now }
});

const Incident = mongoose.model("Incident", incidentSchema);

module.exports = Incident;
