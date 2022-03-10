const express = require("express");
const router = express.Router();
const Physician = require("../../models/Physician");

router.post("/", async (req, res) => {
  try {
    const newPhysician = new Physician({
      name: req.body.name,
      email: req.body.email,
    });

    const data = await newPhysician.save();

    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error: " + error.message);
  }
});

router.get("/", async (req, res) => {
  try {
    const physicians = await Physician.find();

    res.json(physicians);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

module.exports = router;
