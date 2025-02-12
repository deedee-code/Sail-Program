const Book = require('../models/book')

const addBook = async (req, res) => {
    const { title, author, genre, description, publicationDate, isbn, quantity } = req.body;
    if (!title || !author || !genre || !description || !publicationDate || !isbn || !quantity) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newBook = new Book({
            title,
            author,
            genre,
            description,
            publicationDate,
            isbn,
            quantity
        })

        await newBook.save();

        return res.status(201).json({ message: 'Book added successfully', data: newBook });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getAllBooks = async (req, res) => {
    try {
        const allBooks = await Book.find();

        return res.status(200).json({ message: 'Books fetched successfully', data: allBooks });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getBookById = async (req, res) => {
    const { id } = req.params;

    try {
        const book = await Book.findById(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).json({ message: 'Book fetched successfully', data: book });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = {
    addBook,
    getAllBooks,
    getBookById
}