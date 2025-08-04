 const mongoose = require("mongoose");
 require("dotenv").config();

// define mongodb url
const mongoURL = process.env.MONGODB_URL;

// "mongodb://localhost:27017/hotels";

// Setup monogdb connection :
mongoose
  .connect(mongoURL)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

// get the default connection
// MongoDb maintains a default connection object representing mongoDB connection
const db = mongoose.connection; // DB object

// define event listeners for database connection
db.on("connected", () => {
  console.log("Connected to mongoDb server");
});

db.on("error", () => {
  console.error("Error connecting to mongoDb server");
});

db.on("disconnected", () => {
  console.log("Disconnected mongoDb server");
});

// Export the database connection
module.exports = db;

// comment added fro testing!