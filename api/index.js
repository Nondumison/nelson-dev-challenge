// const express = require("express");
// const cors = require("cors");
// const path = require('path');

// const app = express();

// app.use(express.json());

// app.use(cors());

// app.post("/", (req, res) => {
//   const { data } = req.body;

//   if (!data || typeof data !== "string") {
//     return res.status(400).json({
//       error:
//         'Invalid input. The "data" field is required and must be a string.',
//     });
//   }

//   const charArray = data.split("");

//   charArray.sort();

//   res.status(200).json({ word: charArray });
// });

// module.exports = app;

// File: api/index.js

const express = require("express");
const cors = require("cors");
const path = require("path"); // <-- ADD THIS LINE

const app = express();

app.use(express.json());
app.use(cors());

app.use("/public", express.static(path.join(process.cwd(), "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "index.html"));
});

app.post("/", (req, res) => {
  const { data } = req.body;

  if (!data || typeof data !== "string") {
    return res
      .status(400)
      .json({
        error:
          'Invalid input. The "data" field is required and must be a string.',
      });
  }

  const charArray = data.split("");
  charArray.sort();

  res.status(200).json({ word: charArray });
});

module.exports = app;
