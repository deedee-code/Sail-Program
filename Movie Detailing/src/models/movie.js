const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    producer: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    cinema: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Cinema',
        required: true
    },
    numberOfTimesShown: {
        type: Number,
        default: 0
    },
        
}, {
    timestamps: true
})

module.exports = mongoose.model('Movie', movieSchema);