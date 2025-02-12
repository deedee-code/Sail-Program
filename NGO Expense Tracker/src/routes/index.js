const express = require('express');

const authRouter = require('./auth.route');
const orphanageRouter = require('./orphanage.route');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the Library API!');
});

router.use('/auth', authRouter);
router.use('/orphanages', orphanageRouter);

module.exports = router;