const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/createUser', controllers.createUser);
router.post('/createWorkouts', controllers.createWorkout);
router.get('/users', controllers.getAllUsers);
router.get('/workouts', controllers.getAllWorkout);


module.exports = router;