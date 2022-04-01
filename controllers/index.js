const db = require('../db');
const { User, Workout } = require('../models/index')


const createUser = async (req, res) => {
    try {
        const user = await new User(req.body)
        await user.save()
        return res.status(201).json({ user
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

// const getUserById = async (req, res) => {
//     try {
//         const userId = await User.find().sort({ "_id": -1 }).limit(1);
//         return res.status(201).json({ userId });
//     } catch (error) {
//         return res.status(500).send(error.message);
//     }
// }

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
        const workout = await new Workout(
            req.body);
        await workout.save()
        return res.status(201).json({
            workout,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const getAllUserWorkouts = async (req, res) => {
    try {
        const workouts = await Workout.find(req.params.user_id)
        return res.status(200).json({ workouts })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const deleteUser = async (req, res) => {
    try {
        const deletionOfUser = await User.findByIdAndDelete(req.params.id)
        return res.status(200).json({ deletionOfUser })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        let user = await User.findByIdAndUpdate(id, req.body, {
          new: true });
        return res.status(200).json({ user })
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createUser,
    getAllUsers,
    createWorkout,
    getAllUserWorkouts,
    deleteUser,
    updateUser
}