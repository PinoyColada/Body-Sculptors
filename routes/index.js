const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/userCreations', controllers.createUser);
router.post('/workoutCreations', controllers.createWorkout);
router.get('/workoutCreations', controllers.getAllUsers);
router.get('/workoutLists', controllers.getAllUsers);
router.get('/workoutLists/:id/workouts', controllers.getAllUserWorkouts);
router.delete('/workoutLists/:id', controllers.deleteUser);
router.put("/workoutLists/:id", controllers.updateUser);


module.exports = router;