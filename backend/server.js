const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// POST route to handle form submissions
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // Save data to a file (for demonstration purposes)
  const newMessage = { name, email, message, date: new Date().toISOString() };

  fs.readFile("messages.json", "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ error: "Could not read data" });
    }

    const messages = JSON.parse(data || "[]");
    messages.push(newMessage);

    fs.writeFile("messages.json", JSON.stringify(messages, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ error: "Could not save message" });
      }

      res.status(200).json({ success: true, message: "Message saved successfully!" });
    });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
