const mongoose = require("mongoose");

const { Schema } = mongoose;

const saleSchema = new Schema(
  {
    customer: Schema.Types.ObjectId,
    products: [{ id: Schema.Types.ObjectId, quantity: Number, cost: Number }],
    subtotal: Number,
    tax: Number,
    total: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sale", saleSchema);
