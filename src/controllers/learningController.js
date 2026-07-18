const learningModel = require("../models/learningModel");

const getLearningData = (req, res) => {
  try {
    const data = learningModel.getAllData();

    res.status(200).json({
      success: true,
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching data"
    });
  }
};

module.exports = {
  getLearningData
};