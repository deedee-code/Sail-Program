const express = require('express');

const authRouter = require('./auth.route');
const movieRouter = require('./movie.route');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Library API!');
});

router.use('/auth', authRouter);
router.use('/cinemas', movieRouter);

module.exports = router;