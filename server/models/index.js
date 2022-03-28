const { model } = require('mongoose')
const UserSchema = require('./user')
const WorkoutSchema = require('./workout')

const User = model('User', UserSchema)
const Workout = model('Workout', WorkoutSchema)

module.exports = {
  User,
  Workout
}