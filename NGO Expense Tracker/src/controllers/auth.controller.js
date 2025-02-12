const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (req, res) => {
    const { firstName, lastName, username, email, password, confirmPassword } = req.body;
    if (!firstName || !lastName || !username || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    const userExists = await User.findOne({ $or: [{ username }, { email }] });
    if (userExists) {
        return res.status(400).json({ message: 'User already exists' });
    }

    try {
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            username,
            email,
            password: hashedPassword
        });

        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        const user = { ...newUser._doc }
        delete user.password;

        res.status(201).json({ message: 'User registered successfully', data: user, token });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const loginUser = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const userExist = await User.findOne({ username });
        if (!userExist) {
            return res.status(400).json({ message: 'User does not exist' });
        }

        const passwordMatch = await bcrypt.compare(password, userExist.password)
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        const token = jwt.sign({ id: userExist._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        const user = { ...userExist._doc }
        delete user.password;

        return res.status(200).json({ message: 'User logged in successfully', data: user, token })
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const userExist = await User.findById(id);
        if (!userExist) {
            return res.status(404).json({ message: 'User not found' });
        }
        const user = { ...userExist._doc }
        delete user.password;

        return res.status(200).json({ message: 'User fetched successfully', data: user });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;

    try {
        const userExist = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!userExist) {
            return res.status(404).json({ message: 'User not found' });
        }
        const user = { ...userExist._doc }
        delete user.password;

        return res.status(200).json({ message: 'User updated successfully', data: user });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const userExist = await User.findByIdAndDelete(id);
        if (!userExist) {
            return res.status(404).json({ message: 'User not found' });
        }

        return res.status(204).json({ message: 'User deleted successfully' });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await User.find().select('-password');

        return res.status(200).json({ message: 'Users fetched successfully', data: allUsers });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = {
    registerUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUsers
}