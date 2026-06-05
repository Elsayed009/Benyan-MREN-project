// require mongoose
const mongoose = require("mongoose");
// Require Bcrypt
const bcrypt = require("bcrypt");
// Create Schema => username, email, phone Number,password, isActive, isOnline
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username Must Be Required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email Must Be Required"],
      trim: true,
      unique: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: [true, "Email Must Be Required"],
      select: false,
      minlength: 6,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isOnline: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);
// Create Pre Hook
userSchema.pre("save", async function (next) {
  // If Not Change Password Do not Run Bcrypt
  if (!this.isModified("password")) return nex();
  this.password = await bcrypt.hash(this.password, 10);
});
// Create Method Compare Password
userSchema.methods.comparePassword = async function (matchedPassword) {
  return await bcrypt.compare(matchedPassword, this.password);
};
// Create Model
const User = mongoose.model("User", userSchema);
// Export Module
module.exports = User;
