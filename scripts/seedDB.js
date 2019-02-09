const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/incidentDB"
);

const incidentSeed = [
  {
    title: "Bike Lane Obstruction",
    author: "Adrienne Abrams",
    type: "Obstruction",
    description: "Test Description",
    date: new Date(Date.now())
  },
  {
    title: "Hit by Truck",
    author: "Adrienne Abrams",
    type: "Accident",
    description: "Test Description2",
    date: new Date(Date.now())
  }
];

db.Incident
  .remove({})
  .then(() => db.Incident.collection.insertMany(incidentSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
