const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
    maxlength: 32,
  },
  description: {
    type: String,
    trim: true,
    required: true,
    maxlength: 2000,
  },
  price: {
    type: Number,
    required: true,
    maxlength: 32,
    trim: true,
  },
  category: {
    type: objectId,
    ref: "Category",
    required: true,
  },
  stock: {
    type: Number,
  },
  sold: {
    type: Number,
    default: 0,
  },
  photo: {
    data: Buffer,
    contentType: String,
  },
});
