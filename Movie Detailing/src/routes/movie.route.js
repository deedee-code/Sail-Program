const express = require('express');
const authenticateToken = require('../middleware/auth.middleware');
const { addCinema, addMovie, getAllCinemas, getCinemaById, getAllMovies, getMovieById, getCinemaMovie } = require('../controllers/movie.controller');

const movieRouter = express.Router();

movieRouter.post('/', authenticateToken, addCinema);
movieRouter.post('/movies', authenticateToken, addMovie);
movieRouter.get('/', authenticateToken, getAllCinemas);
movieRouter.get('/movies', authenticateToken, getAllMovies);
movieRouter.get('/:id', authenticateToken, getCinemaById);
movieRouter.get('/movies/:id', authenticateToken, getMovieById);
movieRouter.get('/:movieId', authenticateToken, getCinemaMovie);

module.exports = movieRouter;