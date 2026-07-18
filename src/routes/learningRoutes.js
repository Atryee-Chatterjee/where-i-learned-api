const express = require("express");
const router = express.Router();

const {
  getLearningData
} = require("../controllers/learningController");

router.get("/", getLearningData);

module.exports = router;