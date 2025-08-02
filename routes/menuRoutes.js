const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItems.js");

// Assigment-1
// CREATE
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const createData = new MenuItem(data);
    const response = await createData.save();
    console.log("data created");
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server Error" });
  }
});
// READ
router.get("/", async (req, res) => {
  try {
    const Data = await MenuItem.find();
    console.log("data fetched");
    res.status(201).json(Data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// 3rd assigment staructure code :
// READ Specific Type
router.get("/:tasteType", async (req, res) => {
  try {
    const tasteType = req.params.tasteType;
    if (tasteType == "spicy" || tasteType == "sweet" || tasteType == "sour") {
      const response = await MenuItem.find({ taste: tasteType });
      console.log("Data Fetched Successfully");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "Inalid TasteType" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const response = await MenuItem.findByIdAndUpdate(id, updatedData);
    console.log("Data Updated Successfully");
    res.status(200).json(response);
    res.send("Data Updated Successfully");
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});
// DELETE
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const deletedData = req.body;
    const response = await MenuItem.findByIdAndDelete(id, deletedData);
    console.log("Data Deleted Successfully");
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server Error" });
  }
});

module.exports = router;
