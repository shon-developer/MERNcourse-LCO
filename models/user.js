const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuidv1");

const userScheme = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 32,
    trim: true,
  },
  lastName: {
    type: String,
    maxLength: 32,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  userInfo: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  userInfo: {
    type: String,
    trim: true,
  },
  //todo: comeback
  encry_password: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  salt: String,
  role: {
    type: Number,
    default: 0,
  },
  purchase: {
    type: Array,
    default: [],
  },
});

userSchema
  .virtual(password)
  .set(function (password) {
    this._password = password;
    this.salt = uuidv1;
    this.encry_password = this.securePassword(password);
  })
  .get(function () {
    return this._password;
  });

userSchema.method = {
  securePassword: function (plainpassword) {
    if (!password) return "";
    try {
      return crypto
        .createHmac(`sha256`, this.salt)
        .update(plainpassword)
        .digest(`hex`);
    } catch (err) {
      return "";
    }
  },
};

module.export = mongoose.model("User", userSchema);
