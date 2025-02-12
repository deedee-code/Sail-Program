const express = require('express');

const authRouter = require('./auth.route');
const bookRouter = require('./book.route');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Library API!');
});

router.use('/auth', authRouter);
router.use('/books', bookRouter);

module.exports = router;