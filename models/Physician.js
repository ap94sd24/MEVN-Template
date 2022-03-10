const mongoose = require("mongoose");

const PhysicianSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = Physician = mongoose.model("physician", PhysicianSchema);
