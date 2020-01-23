const mongoose = require("mongoose");

const { Schema } = mongoose;

const purchaseSchema = new Schema(
  {
    products: [{ id: Schema.Types.ObjectId, quantity: Number }],
    vendor: Schema.Types.ObjectId,
    total: Number,
    PurchaseOrder: Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Purchase", purchaseSchema);
