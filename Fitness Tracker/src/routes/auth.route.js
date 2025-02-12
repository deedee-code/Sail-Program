const express = require('express');
const { registerUser, loginUser, getUser, updateUser, deleteUser, getAllUsers } = require('../controllers/auth.controller');
const authenticateToken = require('../middleware/auth.middleware');

const authRouter = express.Router();

authRouter.post('/signup', registerUser);
authRouter.post('/login', loginUser);
authRouter.get('/users/:id', authenticateToken, getUser);
authRouter.put('/users/:id', authenticateToken, updateUser);
authRouter.delete('/users/:id', authenticateToken, deleteUser);
authRouter.get('/users', getAllUsers);

module.exports = authRouter;