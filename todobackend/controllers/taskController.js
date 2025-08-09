const taskModel = require('../models/TaskModel');
const mongoose = require('mongoose');

//create a task
const createTask = async (req, res) => {
    const { title, description } = req.body;
    try {
        const task = await taskModel.create({ title, description });
        res.status(200).json(task);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

//toget all tasks
const getTasks = async(req, res) => {
    try{
        const task = await taskModel.find({});
        res.status(200).json(task);
    }catch(error){
        res.status(400).json({error: error.message});
    }}

    //get a single task by id
    const getTaskById = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'No such task'});
    }
    try {
        const singleTask = await taskModel.findById(id);
        if (!singleTask) {
            return res.status(404).json({ error: 'Task not found' });
        }
        res.status(200).json(singleTask);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


module.exports = { createTask, getTasks ,getTaskById};