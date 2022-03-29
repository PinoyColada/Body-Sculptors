const db = require('../db');
const { User, Workout } = require('../models');

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

const createUser = async () => {
    const users = [{
        name: "Raymond",
        age: "22",
        bodyWeight: 180,

    },
    {
        name: "Julienne",
        age: "20",
        bodyWeight: 105,
    }
]

    await User.insertMany(users);
    console.log('Created Users!');
    return users;
}

const createWorkoutsOfUser = async () => {
    const user1 = await User.find({ name: 'Raymond' })
    const user2 = await User.find({ name: 'Julienne' })

    const workouts = [{
        exercise: "Twisting Dumbbell Curl",
        weight: 30,
        sets: 3,
        reps: 10,
        user_id: user1[0]._id
    },
    {
        exercise: "Squats",
        weight: 90,
        sets: 3,
        reps: 10,
        user_id: user2[0]._id
    }]

    await Workout.insertMany(workouts);
    console.log('Created Workouts with Users!');
}

const run = async () => {
    await createUser();
    await createWorkoutsOfUser();
    db.close();
}

run();
