const express = require("express");
const router = express.Router();
const Appointment = require("../../models/Appointment");

router.post("/", async (req, res) => {
  try {
    const newAppointment = new Appointment({
      user: req.body.userId,
      clientName: req.body.clientName,
      time: req.body.time,
      type: req.body.type,
    });

    const data = await newAppointment.save();

    res.json(data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error: " + error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const appointments = await Appointment.find({ user: req.params.id });

    res.json(appointments);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error!");
  }
});

module.exports = router;
