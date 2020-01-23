const mongoose = require("mongoose");

const { Schema } = mongoose;

const customerSchema = new Schema(
  {
    name: String,
    email: String,
    phone: Number,
    address: {
      street: String,
      city: String,
      state: String,
      zip: Number
    },
    purchaseHistory: [Schema.Types.ObjectId]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Customer", customerSchema);
