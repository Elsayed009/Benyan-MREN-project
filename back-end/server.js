import app from "./app.js";
import sequelize from "./config/sequelize.js";
import { logger } from "./shared/utils/logger.js";

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "0.0.0.0";


const validateEnv = () => {
  const required = ["DATABASE_URL", "JWT_SECRET"];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    logger.error(`Missing required environment variables: ${missing.join(", ")}`);
    process.exit(1);
  }
};


const startServer = async () => {
  try {
    validateEnv();

    await sequelize.authenticate();
    logger.info("Database connection established successfully");

    if (process.env.NODE_ENV !== "production") {
      await sequelize.sync({ alter: false }); // Set to true to alter tables
      logger.info("Database models synchronized");
    }

    // Start server
    app.listen(PORT, HOST, () => {
      logger.info(`Server running on http://${HOST}:${PORT}`);
      logger.info(`Environment: ${process.env.NODE_ENV || "development"}`);
    });
  } catch (error) {
    logger.error("Unable to start server:", error);
    process.exit(1);
  }
};

startServer();

// Graceful shutdown
process.on("SIGTERM", async () => {
  logger.info("SIGTERM signal received: closing HTTP server");
  await sequelize.close();
  process.exit(0);
});

process.on("SIGINT", async () => {
  logger.info("SIGINT signal received: closing HTTP server");
  await sequelize.close();
  process.exit(0);
});
