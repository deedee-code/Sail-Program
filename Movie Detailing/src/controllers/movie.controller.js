const Cinema = require('../models/cinema');
const Movie = require('../models/movie');

const addCinema = async (req, res) => {
    const { name, location, capacity, availableSeats, price } = req.body;
    if (!name || !location || !capacity || !availableSeats || !price) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newCinema = new Cinema({
            name,
            location,
            capacity,
            availableSeats,
            price
        })

        await newCinema.save();

        return res.status(201).json({ message: 'Cinema added successfully', data: newCinema });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const addMovie = async (req, res) => {
    try {
        const newMovie = new Movie(req.body);

        await newMovie.save();

        return res.status(201).json({ message: 'Movie added successfully', data: newMovie });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getAllCinemas = async (req, res) => {
    try {
        const allcinemas = await Cinema.find();

        return res.status(200).json({ message: 'Cinemas fetched successfully', data: allBooks });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getCinemaById = async (req, res) => {
    const { id } = req.params;

    try {
        const cinema = await Cinema.findById(id);
        if (!cinema) {
            return res.status(404).json({ message: 'Cinema not found' });
        }

        return res.status(200).json({ message: 'Cinema fetched successfully', data: cinema });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = {
    addCinema,
    addMovie,
    getAllCinemas,
    getCinemaById
}