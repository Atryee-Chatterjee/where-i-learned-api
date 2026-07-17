const data = require("../data/db.json");

const getAllLearning = () => {
  return data;
};

module.exports = {
  getAllLearning,
};