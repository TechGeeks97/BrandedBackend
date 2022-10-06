const comman = require("../utils/common");
const { subscriptionPlans } = comman;
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,

      default: null,
    },
    password: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      default: null,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
