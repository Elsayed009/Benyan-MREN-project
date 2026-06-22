// Dotenv
require("dotenv").config();
// express
const express = require("express");
const app = express();
// Create Node server
const http = require("http");
const appServer = http.createServer(app);

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
const userAuthRoutes = require("./routes/authUser.route");

app.use("/api/dashboard", adminRoutes);
app.use("/api/dashboard/users", userRoutes);
app.use("/api/users", userAuthRoutes);

const { Server } = require("socket.io");
const io = new Server(appServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

require("./sockets/chat.socket")(io);

// Port
const port = process.env.PORT || 3000;
// Run Server
appServer.listen(port, () => {
  console.log(`Server Is Running ${port}`);
});
