const config = require("./utils/config");
const express = require("express");
const app = express();
const cors = require("cors");
const emailRoutes = require("./routes/email");
const mongoose = require("mongoose");
const middleware = require("./utils/middleware");
const logger = require("./utils/logger");

const logosRouter = require("./controllers/logo");
const imagesRouter = require("./controllers/image");

mongoose.set("strictQuery", false);
logger.info("connecting to", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("connected to MongoDB");
  })
  .catch((error) => {
    logger.error("error connection to MongoDB:", error.message);
  });

app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);
app.use(express.static("build"));

app.use("/api", emailRoutes);
app.use("/api/logos", logosRouter);
app.use("/api/images", imagesRouter);

app.use(middleware.errorHandler);

module.exports = app;
