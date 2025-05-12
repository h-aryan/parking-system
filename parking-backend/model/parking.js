const mongoose = require("mongoose");

const parkingSchema = new mongoose.Schema({
  carNumber: { type: String, required: true, unique: true },
  entryTime: { type: Date, default: Date.now },
  exitTime: { type: Date },
  amount: { type: Number, default: 0 },
});

module.exports = mongoose.model("Parking", parkingSchema);
