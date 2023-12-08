const imagesRouter = require("express").Router();
const Image = require("../models/image");

imagesRouter.get("/", async (req, res) => {
  const projectQuery = req.query.project;
  let query = {};

  if (projectQuery) {
    query.project = projectQuery;
  }

  try {
    const images = await Image.find(query);
    res.json(images);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = imagesRouter;
