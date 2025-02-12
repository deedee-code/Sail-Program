const express = require('express');
const { addWorkout, getWorkouts, getWorkout } = require('../controllers/fitness.controller');
const authenticateToken = require('../middleware/auth.middleware');

const exerciseRouter = express.Router();

exerciseRouter.post('/', authenticateToken, addWorkout);
exerciseRouter.get('/', authenticateToken, getWorkouts);
exerciseRouter.get('/:id', authenticateToken, getWorkout);

module.exports = exerciseRouter;