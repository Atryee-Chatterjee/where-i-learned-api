const learningData = require("../data/db");

const getAllData = () => learningData;

const getAllSemesters = () => learningData.semesters;

const getSemesterById = (id) => {
  return learningData.semesters.find(
    (sem) => sem.semester === parseInt(id)
  );
};

const getSubjectsBySemester = (id) => {
  const sem = getSemesterById(id);
  return sem ? sem.subjects : null;
};

const getResourcesBySemester = (id) => {
  const sem = getSemesterById(id);
  if (!sem) return null;

  return sem.subjects.flatMap((sub) => sub.videos || []);
};

module.exports = {
  getAllData,
  getAllSemesters,
  getSemesterById,
  getSubjectsBySemester,
  getResourcesBySemester,
};