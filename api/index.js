const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  try {
    if (!req.body.data || typeof req.body.data !== "string") {
      return res.status(400).json({
        error: 'Invalid input. Expected { "data": "string" }',
      });
    }

    const charArray = req.body.data.split("");
    const sortedArray = charArray.sort();

    res.json({ word: sortedArray });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
