const express = require('express');
const authenticateToken = require('../middleware/auth.middleware');
const { addOrphanageEntry, getAllOrphanageVisited, getOrphanageById } = require('../controllers/orphanage.controller');

const orphanageRouter = express.Router();

orphanageRouter.post('/', authenticateToken, addOrphanageEntry);
orphanageRouter.get('/', authenticateToken, getAllOrphanageVisited);
orphanageRouter.get('/:id', authenticateToken, getOrphanageById);


module.exports = orphanageRouter;