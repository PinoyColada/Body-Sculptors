const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/userCreation', controllers.createUser);
router.post('/workoutCreation', controllers.createWorkout);
router.get('/users', controllers.getAllUsers);
router.get('/workouts', controllers.getAllWorkout);


module.exports = router;