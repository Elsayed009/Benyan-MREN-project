// Dotenv
require("dotenv").config();
// express
const express = require("express");
const app = express();
const morgan = require("morgan");
// middleware json
app.use(express.json());
// connection DB
// Simple Logger
if (process.env.NODE_ENV === "dev") {
  app.use(morgan("dev"));
}
// Test Route
app.get("/test", (req, res) => {
  res.json({ msg: "Test Route" });
});

const connectedDB = require("./config/db");
connectedDB();

const adminRoutes = require("./routes/auth.route");
const userRoutes = require("./routes/user.route");

app.use("/api/dashboard", adminRoutes);
app.use("/api/dashboard/users", userRoutes);

// Port
const port = process.env.PORT || 3000;
// Run Server
app.listen(port, () => {
  console.log(`Server Is Running ${port}`);
});
