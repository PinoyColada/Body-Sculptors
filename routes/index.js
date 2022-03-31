const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/userCreation', controllers.createUser);
router.post('/workoutCreation', controllers.createWorkout);
router.get('/workoutCreation', controllers.getAllUsers);
router.get('/workoutList', controllers.getAllUsers);
router.get('/workouts', controllers.getAllWorkout);
router.delete('/workoutList/:id', controllers.deleteUser);


module.exports = router;