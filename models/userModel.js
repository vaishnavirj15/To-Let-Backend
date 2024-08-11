const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["admin", "content creator", "user"],
  },
  userType: {
    type: String,
    enum: ["buyer", "tenant", "owner", ""],
  },
  firstSchool: {
    type: String,
    required: true,
  },
  resetToken: {
    type: String,
  },
  resetTokenExpiry: {
    type: Date,
  },
  securityQuestionAnswer: {
    type: String, 
  },
});

module.exports = mongoose.model("User", UserSchema);
