const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "physicians",
    required: true,
  },
  clientName: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: false,
  },
});

module.exports = Appointment = mongoose.model("appointment", AppointmentSchema);
