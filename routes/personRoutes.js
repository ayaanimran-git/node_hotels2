const express = require("express");
const router = express.Router();
const Person = require("../models/person.js");

// saving data of person
// *CREATE* Person Data
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const response = await newPerson.save();
    console.log("data saved");
    res.status(201).json(response);
    res.send("User Create Successfully");
  } catch (eerror) {
    console.error(rror);
    res.status(500).json({ error: "Internal server Error" });
  }
});
// *READ* All Person Data
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(201).json(data);
    res.send("All User's Data , Fetched Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});
// *READ* Specific Persons Data
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType; // extract the workType from the url
    if (
      workType == "chef" ||
      workType == "manager" ||
      workType == "waiter" ||
      workType == "owner"
    ) {
      const response = await Person.find({ work: workType });
      console.log("Data Fetched Successfully");
      res.status(200).json(response);
      res.send("WorkType of User Fetched Successfully");
    } else {
      res.status(404).json({ error: "Inalid WorkType" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
// *UPDATE* Person's Data
router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const updatedPersonData = req.body;
    const response = await Person.findByIdAndUpdate(
      personId,
      updatedPersonData,
      {
        new: true, // Return the updated document
        runValidators: true, // Run mongoose validations
      }
    );

    if (!response) {
      return res.status(404).json({ error: "User Not Found" });
    }
    console.log("User Updated Successfully");
    res.status(200).json(response);
    res.send("User Updated Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});
// *DELETE* Person's Data
router.delete("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const deletedPersonData = req.body;
    const response = await Person.findByIdAndDelete(
      personId,
      deletedPersonData
    );
    if (!response) {
      return res.status(404).json({ error: "User Not Found" });
    }
    console.log("User's Data Deleted Successfully");
    res.status(200).json(response);
    res.send("User Deleted Successfully");
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;

// C.R.U.D Done!
