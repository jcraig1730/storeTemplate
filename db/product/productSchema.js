const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = new Schema(
  {
    title: String,
    description: String,
    images: [String],
    price: Number,
    cost: Number,
    quantity: Number,
    vendors: [Schema.Types.ObjectId],
    purchaseHistory: [Schema.Types.ObjectId],
    saleHistory: [Schema.Types.ObjectId]
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
