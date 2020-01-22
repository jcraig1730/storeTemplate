const mongoose = require("mongoose");

const { Schema } = mongoose;

const purchaseSchema = new Schema(
  {
    products: [Schema.Types.ObjectId],
    vendor: Schema.Types.ObjectId,
    total: Number,
    PurchaseOrder,
    Number
  },
  { timestamps: true }
);

module.exports = mongoose.model("Purchase", purchaseSchema);
