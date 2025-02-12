const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log('Database connected successfully');
    } catch (error) {
        console.error(error);
    }
}

module.exports = connectDB;