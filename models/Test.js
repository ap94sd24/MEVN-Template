const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const TestSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: false,
  },
});

module.exports = Test = mongoose.model("test", TestSchema);
