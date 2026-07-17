const express = require("express");
const app = express();

const learningRoutes = require("./routes/learningRoutes");

app.use(express.json());

// base route
app.use("/api/learning", learningRoutes);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});