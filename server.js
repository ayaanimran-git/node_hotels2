const express = require("express");
const app = express();
const db = require("./db.js");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json()); // req.body

app.get("/", (req, res) => {
  res.send("Welcome to Our Hotel!");
});

// Assigment End! and 4th Class start from here where we Learn *_Express Router_*:

const personRoutes = require("./routes/personRoutes.js");
const menuRoutes = require("./routes/menuRoutes.js");

app.use("/person", personRoutes);
app.use("/menu", menuRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});

// **_Methods for CRUD Operations_** :

// Create =>  POST
// Read   =>  GET
// Update =>  PUT/PATCH
// Delete =>  DELETE

// 3rd Assignment Task is :
// make a route in "menuRoutes.js" where we can add Route_Parameter of TASTE to show only dish's taste like sweet , sour or spicy
