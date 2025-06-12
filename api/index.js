// const express = require("express");
// const router = express.Router();

// router.post("/", (req, res) => {
//   try {
//     if (!req.body.data || typeof req.body.data !== "string") {
//       return res.status(400).json({
//         error: 'Invalid input. Expected { "data": "string" }',
//       });
//     }

//     const charArray = req.body.data.split("");
//     const sortedArray = charArray.sort();

//     res.json({ word: sortedArray });
//   } catch (error) {
//     console.error("Server error:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });

// module.exports = router;

const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", (req, res) => {
  try {
    const { data } = req.body;

    if (!data || typeof data !== "string") {
      return res.status(400).json({
        error: 'Invalid input. Expected { "data": "string" }',
      });
    }

    const sorted = data.split("").sort();
    res.json({ word: sorted });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = app;
