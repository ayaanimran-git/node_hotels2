const mongoose = require("mongoose");

// define mongodb url
const mongoURL =
  "mongodb+srv://ayaanlabs0092:TESpuAg11HYf3M0Z@cluster-for-testing.ltgwdbk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-For-Testing";
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
