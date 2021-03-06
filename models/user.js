const mongoose = require('mongoose');
const Schema = mongoose.Schema

const User = new Schema(
  {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    bodyWeight: { type: Number, required: true},
  },
  { timestamps: true }
)

module.exports = User