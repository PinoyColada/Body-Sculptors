const db = require('../db');
const { User, Workout } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createUser = async () => {
    const users = [{
        name: "Raymond",
        age: "22",
        bodyWeight: 180
    },
    {
        name: "Julienne",
        age: "20",
        bodyWeight: 105
    }
]

    await User.insertMany(users);
    console.log('Created Users!');
    return users;
}

const createWorkout = async () => {
    const workouts = [{
        exercise: "Twisting Dumbbell Curl",
        weight: 30,
        sets: 3,
        reps: 10
    }]
    await Workout.insertMany(workouts);
    console.log('Created Workouts!');
    return workouts;
}

const run = async () => {
    await createUser();
    await createWorkout();
    db.close();
}

run();
