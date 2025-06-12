export default function handler(req, res) {
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    return res.status(200).end();
  }

  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { data } = req.body;

    if (!data || typeof data !== "string") {
      return res.status(400).json({
        error: 'Invalid input. Expected { "data": "string" }',
      });
    }

    const sorted = data
      .toLowerCase()
      .split("")
      .filter((char) => char !== " ")
      .sort();

    res.status(200).json({ word: sorted });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}
