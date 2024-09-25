const sheet = require("./getInfo.js");
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
const port = 5001;

console.log(sheet[0]);

app.get("/getQuestions", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  // const jsonArray = JSON.stringify(sheet);
  res.json(sheet);
});

app.listen(port, () => {
  console.log("Server is running on port 5001");
});
