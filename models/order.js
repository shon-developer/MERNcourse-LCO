const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema(
  {
    product: {
      type: ObjectId,
      ref: "Product",
    },
    name: String,
    count: Number,
    price: Number,
  },
  { timestamps: true }
);

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);

const orderSchema = new mongoose.Schema(
  {
    products: [ProductCartSchema],
    transactionId: {},
    amount: {
      type: Number,
      required: true,
    },
    address: String,
    updated: Date,
    user: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps }
);
const Order = mongoose.model("Order", orderSchema);

module.exports = { Order, ProductCart };
