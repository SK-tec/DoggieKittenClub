const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
const axios = require("axios");
const PORT = 5000;
app.use(cors());
// Serve static files from the React app
app.use(express.static(path.join(__dirname, "../client/build")));
app.get("/", (req, res) => {
  res.send("<h1>Welcome To Server </h1>");
});
app.get("/api/cat", async (req, res) => {
  try {
    // Make a GET request to an external API
    const response = await axios.get(process.env.CAT_API);
    const cat_data = response.data;
    // Use the response data
    res.json(cat_data);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});
app.get("/api/dog", async (req, res) => {
  try {
    const response = await axios.get(process.env.DOG_API);
    const dog_data = response.data;
    res.json(dog_data);
  } catch (e) {
    res.status(500).json({ error: "An error occurred while fetching data" });
  }
});
// Handle any other routes by serving the React app
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build", "index.html"));
});
app.listen(PORT, () => {
  console.log(`Server is running on the Port${PORT}`);
});
