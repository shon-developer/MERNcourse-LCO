const mongoose = require("mongoose");
const category = require("./category");
const { ObjectId } = mongoose.Schema;

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxLenght: 50,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      maxLenght: 2000,
      trim: true,
    },
    price: {
      type: Number,
      required: true,
      maxLenght: 32,
      trim: true,
    },
    category: {
      type: ObjectId,
      ref: "Categroy",
      required: true,
    },
    stock: {
      type: Number,
      default: 0,
    },
    sold: {
      type: String,
      default: 0,
    },
    photo: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
