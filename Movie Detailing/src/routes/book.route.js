const express = require('express');
const { addBook, getAllBooks, getBookById } = require('../controllers/book.controller');
const authenticateToken = require('../middleware/auth.middleware');

const bookRouter = express.Router();

bookRouter.post('/', authenticateToken, addBook);
bookRouter.get('/', getAllBooks);
bookRouter.get('/:id', getBookById);


module.exports = bookRouter;