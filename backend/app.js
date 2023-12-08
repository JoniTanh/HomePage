const express = require("express");
const app = express();
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");
const storageRoutes = require("./routes/storageRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api", emailRoutes);
app.use("/api", storageRoutes);

module.exports = app;
