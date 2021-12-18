const express = require("express");
const mongoose = require("mongoose");
const filmModel = require("./film-schema");
require("dotenv").config();

const { PORT, DB_URL } = process.env;

const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  try {
    const film = await filmModel.create(req.body);
    res.status(200).json(film);
  } catch (error) {
    res.status(500).json(error);
  }
});

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => {
      console.log(`Server started on ${PORT} port`);
    });
  } catch (error) {
    console.log(`error`, error);
  }
};

startApp();
