const mongoose = require("mongoose");

const { Schema } = mongoose;

const vendorSchema = new Schema(
  {
    name: String,
    phone: Number,
    contact: String,
    address: {
      street: String,
      city: String,
      state: String,
      zip: Number
    },
    owed: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vendor", vendorSchema);
