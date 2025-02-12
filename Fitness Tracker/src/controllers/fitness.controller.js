const Fitness = require('../models/fitness')

const addWorkout = async (req, res) => {
    const { exerciseName, exerciseDescription, exerciseDuration, exerciseCaloriesBurned, dateOfSession } = req.body;
    if (!exerciseName || !exerciseDescription || !exerciseDuration || !exerciseCaloriesBurned || !dateOfSession) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newWorkout = new Fitness({
            exerciseName,
            exerciseDescription,
            exerciseDuration,
            exerciseCaloriesBurned,
            dateOfSession
        })

        await newWorkout.save();

        return res.status(201).json({ message: 'Workout added successfully', data: newWorkout });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
}

const getWorkouts = async (req, res) => {
    try {
        const allWorkouts = await Fitness.find();

        return res.status(200).json({ message: 'Workouts fetched successfully', data: allWorkouts });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getWorkout = async (req, res) => {
    const { id } = req.params;

    try {
        const workout = await Fitness.findById(id);
        if (!workout) {
            return res.status(404).json({ message: 'Workout not found' });
        }

        return res.status(200).json({ message: 'Workout fetched successfully', data: workout });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = {
    addWorkout,
    getWorkouts,
    getWorkout
}