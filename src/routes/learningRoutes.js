const express = require("express");
const router = express.Router();

const {
  getLearningData,
  getSemesters,
  getSemester,
  getSubjects,
  getResources,
} = require("../controllers/learningController");

// existing
router.get("/", getLearningData);

// ✅ NEW ROUTES
router.get("/semesters", getSemesters);
router.get("/semesters/:id", getSemester);
router.get("/semesters/:id/subjects", getSubjects);
router.get("/semesters/:id/resources", getResources);

module.exports = router;