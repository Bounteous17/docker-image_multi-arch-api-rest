// Import required modules
const express = require("express");

// Create an instance of Express
const app = express();

// Define a route for GET requests to the root URL '/'
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
