// Import required modules
const express = require("express");
const pg = require("pg");

// Create an instance of Express
const app = express();

// Create an instance of PG client
const connectPSQL = process.env.PGCONNECT === "true";
let pgClient;

if (connectPSQL) {
  console.info("Trying to connect PSQL server ...");
  pgClient = new pg.Client({
    ssl: { rejectUnauthorized: false },
  });
  pgClient
    .connect()
    .then(() => console.log("Suvccessfully connected PSQL server"))
    .catch((error) => {
      console.error(error);
    });
} else {
  console.info("Ignoring PSQL server connection attempt");
}

// Define a route for GET requests to the root URL '/'
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/psql", async (req, res) => {
  if (!connectPSQL) {
    return res.json({ connected: false });
  }
  res.json({ connected: pgClient._connected });
});

// Start the server on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
