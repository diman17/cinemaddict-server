const express = require("express");
require("dotenv").config();

const { PORT } = process.env;

const app = express();

app.get("/", (req, res) => {
  res.status(200).json("Server is working");
});

app.listen(PORT, () => {
  console.log(`Server started on ${PORT} port`);
});
