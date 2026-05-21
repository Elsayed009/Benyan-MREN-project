// auper admin seed
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const adminSchema = new mongoose.Schema(
  {
    username: { type: String, required: [true, "Username is required"] },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
  },
  { timestamps: true },
);

// mongoose hooks
adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10); // 10 هو عدد ال rounds اللي هتستخدم في عملية التشفير كل ما زاد العدد كل ما زادت قوة التشفير بس كمان زاد الوقت اللي بيحتاجه للتشفير
});

adminSchema.methods.comparePassword = async function (matchedPassword) {
  return await bcrypt.compare(matchedPassword, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
