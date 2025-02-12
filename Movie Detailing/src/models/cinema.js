const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cinemaSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    availableSeats: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    movie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Cinema', cinemaSchema);