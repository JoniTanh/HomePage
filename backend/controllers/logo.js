const logosRouter = require("express").Router();
const Logo = require("../models/logo");

logosRouter.get("/", async (req, res) => {
  const images = await Logo.find({});
  res.json(images);
});

module.exports = logosRouter;
