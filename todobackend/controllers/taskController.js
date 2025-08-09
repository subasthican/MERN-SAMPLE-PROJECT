const taskModel1 = require('../models/taskModel1');

//create a task
const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await taskModel1.create({ title, description });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}