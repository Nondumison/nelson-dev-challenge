const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());

app.use(cors());

app.post("/", (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== "string") {
    return res.status(400).json({
      error:
        'Invalid input. The "data" field is required and must be a string.',
    });
  }

  const charArray = data.split("");

  charArray.sort();

  res.status(200).json({ word: charArray });
});

module.exports = app;
