const { Router } = require('express');
const controllers = require('../controllers');
const router = Router();

router.post('/createUser', controllers.createUser);

router.post('/createWorkouts', controllers.createWorkout);


module.exports = router;