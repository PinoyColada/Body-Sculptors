const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Workout = new Schema(
  {
    exercise: { type: String, required: true },
    weight: { type: Number, required: true },
    sets: { type: Number, required: true},
    reps: { type: Number, required: true},
    user_id: { type: Schema.Types.ObjectId, ref: 'user_id' }
  },
  { timestamps: true }
)

module.exports = Workout