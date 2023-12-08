const express = require("express");
const router = express.Router();
const storageController = require("../controllers/storageController");

router.get("/images/:projectName", storageController.getProjectImages);

module.exports = router;
