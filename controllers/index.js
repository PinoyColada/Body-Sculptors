const db = require('../db');
const { User, Workout } = require('../models/index')


const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({
            user
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createWorkout = async (req, res) => {
    try {
        const workout = await new Workout(req.body)
        await workout.save()
        return res.status(201).json({
            workout,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllWorkout = async (req, res) => {
    try {
        const workouts = await Workout.find()
        return res.status(200).json({ workouts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createUser,
    getAllUsers,
    createWorkout,
    getAllWorkout
}