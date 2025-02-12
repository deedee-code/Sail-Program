const Orphanage = require('../models/orphanage')

const addOrphanageEntry = async (req, res) => {
    const { name, description, address, numberOfOrphans, dateVisited, itemsTaken, moneySpent } = req.body;
    if (!name || !description || !address || !numberOfOrphans || !dateVisited || !itemsTaken || !moneySpent) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newOrphanage = new Orphanage({
            name,
            description,
            address,
            numberOfOrphans,
            dateVisited,
            itemsTaken,
            moneySpent
        })

        await newOrphanage.save();

        return res.status(201).json({ message: 'Successfully added orphanage entry', data: newOrphanage });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getAllOrphanageVisited = async (req, res) => {
    try {
        const allOrphanage = await Orphanage.find();

        return res.status(200).json({ message: 'Successfully fetched all orphanage visited', data: allOrphanage });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

const getOrphanageById = async (req, res) => {
    const { id } = req.params;

    try {
        const orphanage = await Orphanage.findById(id);
        if (!orphanage) {
            return res.status(404).json({ message: 'Orphanage not found' });
        }

        return res.status(200).json({ message: 'Successfully fetched orphanage', data: orphanage });
    } catch (error) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
}

module.exports = {
    addOrphanageEntry,
    getAllOrphanageVisited,
    getOrphanageById
}