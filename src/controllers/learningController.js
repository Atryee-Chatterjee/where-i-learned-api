const learningModel = require("../models/learningModel");

const getLearning = (req, res) => {
  const data = learningModel.getAllLearning();
  res.json(data);
};

module.exports = {
  getLearning,
};