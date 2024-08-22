const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const apiRoutes = require("./routes/api");
const { extractKeywords } = require("./utils/keywordExtractor");
const { saveToDatabase } = require("./utils/database");
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const app = express();
const port = 5000;

// Middleware
app.use(bodyParser.json());
// app.use("/api", apiRoutes);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// File upload endpoint
app.post("/upload", upload.single("resume"), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const resumeBuffer = req.file.buffer;
    const extractedKeywords = extractKeywords(resumeBuffer);
    await saveToDatabase(extractedKeywords);
    res.json({
      message: "File uploaded and processed",
      keywords: extractedKeywords,
    });
  } catch (error) {
    console.error("Error processing file:", error);
    res.status(500).json({ error: "Error processing file" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
