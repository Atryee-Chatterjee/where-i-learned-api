const express = require("express");
const app = express();

const learningRoutes = require("./routes/learningRoutes");

app.use(express.json());

app.use("/where-i-learned-api", learningRoutes);

module.exports = app;