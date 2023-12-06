const express = require("express");
const app = express();
const cors = require("cors");
const emailRoutes = require("./routes/emailRoutes");

app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use("/api", emailRoutes);

module.exports = app;
