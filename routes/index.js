const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/userCreation', controllers.createUser);
router.post('/workoutCreation', controllers.createWorkout);
router.get('/workoutCreation', controllers.getAllUsers);
router.get('/workoutList', controllers.getAllUsers);
router.get('/workoutList/:id/workouts', controllers.getAllUserWorkouts);
router.delete('/workoutList/:id', controllers.deleteUser);
router.put("/workoutList/:id", controllers.updateUser);


module.exports = router;