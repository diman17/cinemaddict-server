const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routers/router');
require('dotenv').config();

const { PORT, DB_URL } = process.env;

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', router);

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL);
    app.listen(PORT, () => console.log(`Server started on ${PORT} port`));
  } catch (error) {
    console.log(`error`, error);
  }
};

startApp();
