const express = require('express');
const authenticateToken = require('../middleware/auth.middleware');
const { addOrphanageEntry, getAllOrphanageVisited, getOrphanageById } = require('../controllers/orphanage.controller');

const bookRouter = express.Router();

bookRouter.post('/', authenticateToken, addOrphanageEntry);
bookRouter.get('/', authenticateToken, getAllOrphanageVisited);
bookRouter.get('/:id', authenticateToken, getOrphanageById);


module.exports = bookRouter;