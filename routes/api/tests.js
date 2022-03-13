const express = require("express");
const router = express.Router();
const Test = require("../../models/Test");

router.post("/", async (req, res) => {
  try {
    const newTest = new Test({
      name: req.body.name,
      date: req.body.date,
    });

    const data = await newTest.save();

    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error: " + error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const tests = await Test.find();

    res.json(tests);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

module.exports = router;
