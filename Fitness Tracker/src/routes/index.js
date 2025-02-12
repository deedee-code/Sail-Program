const express = require('express');

const authRouter = require('./auth.route');
const workoutRouter = require('./fitness.route');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Library API!');
});

router.use('/auth', authRouter);
router.use('/workout', workoutRouter);

module.exports = router;