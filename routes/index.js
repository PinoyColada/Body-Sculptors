const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('https://agile-journey-75895.herokuapp.com/userCreation', controllers.createUser);
router.post('https://agile-journey-75895.herokuapp.com/workoutCreation', controllers.createWorkout);
router.get('https://agile-journey-75895.herokuapp.com/workoutCreation', controllers.getAllUsers);
router.get('https://agile-journey-75895.herokuapp.com/workoutList', controllers.getAllUsers);
router.get('https://agile-journey-75895.herokuapp.com/workoutList/:id/workouts', controllers.getAllUserWorkouts);
router.delete('https://agile-journey-75895.herokuapp.com/workoutList/:id', controllers.deleteUser);
router.put("https://agile-journey-75895.herokuapp.com/workoutList/:id", controllers.updateUser);


module.exports = router;