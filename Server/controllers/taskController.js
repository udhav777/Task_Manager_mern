const Task = require("../module/taskModule");

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json(task);
  } catch (error) {
    res.status(400).json(error);
  }
};

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ meg: error.message });
  }
};

const getTask = async (req, res) => {
  try {
    const { _id } = req.params;

    const task = await Task.findById(_id);
    if (!task) {
      return res.status(404).json(`No task with id: ${_id}`);
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { _id } = req.params;

    const task = await Task.findOneAndDelete(_id);
    if (!task) {
      return res.status(404).json(`task not delete with id: ${_id}`);
    }

    res.status(200).json("Task is deleted");
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updataTask = async (req, res) => {
  try {
    const { _id } = req.params;

    const task = await Task.findByIdAndUpdate({ _id }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json("Task is update");
  } catch (error) {
    res.status(400).json({ mes: error.message });
  }
};

module.exports = {
  createTask,
  getAllTask,
  getTask,
  deleteTask,
  updataTask,
};
