const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orphanageSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    numberOfOrphans: {
        type: Number,
        required: true
    },
    dateVisited: {
        type: Date,
        required: true
    },
    itemsTaken: [{
        type: String,
        required: true
    }],
    moneySpent: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model('Orphanage', orphanageSchema);