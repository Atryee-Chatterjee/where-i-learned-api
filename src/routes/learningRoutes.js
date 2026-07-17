const express = require("express");
const router = express.Router();
const learningController = require("../controllers/learningController");

router.get("/", learningController.getLearning);

module.exports = router;