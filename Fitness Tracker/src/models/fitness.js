const e = require('express');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
    exerciseName: {
        type: String,
        required: true
    },
    exerciseDescription: {
        type: String,
        required: true
    },
    exerciseDuration: {
        type: Number,
        required: true
    },
    exerciseCaloriesBurned: {
        type: Number,
        required: true
    },
    dateOfSession: {
        type: Date,
        required: true
    },
}, {
    timestamps: true
})

module.exports = mongoose.model('Fitness', fitnessSchema);