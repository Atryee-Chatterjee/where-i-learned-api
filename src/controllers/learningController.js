const learningModel = require("../models/learningModel");

const getLearningData = (req, res) => {
  try {
    const data = learningModel.getAllData();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching data",
    });
  }
};

// ✅ NEW

const getSemesters = (req, res) => {
  const data = learningModel.getAllSemesters();
  res.json(data);
};

const getSemester = (req, res) => {
  const data = learningModel.getSemesterById(req.params.id);

  if (!data) {
    return res.status(404).json({ message: "Semester not found" });
  }

  res.json(data);
};

const getSubjects = (req, res) => {
  const data = learningModel.getSubjectsBySemester(req.params.id);

  if (!data) {
    return res.status(404).json({ message: "Subjects not found" });
  }

  res.json(data);
};

const getResources = (req, res) => {
  const data = learningModel.getResourcesBySemester(req.params.id);

  if (!data) {
    return res.status(404).json({ message: "Resources not found" });
  }

  res.json(data);
};

module.exports = {
  getLearningData,
  getSemesters,
  getSemester,
  getSubjects,
  getResources,
};