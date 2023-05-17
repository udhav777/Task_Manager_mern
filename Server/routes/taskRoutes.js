const express = require("express");
const routes = express.Router();
const {
  getAllTask,
  createTask,
  getTask,
  deleteTask,
  updataTask,
} = require("../controllers/taskController");

routes.post("/task", createTask);

routes.get("/task", getAllTask);

routes.get("/task/:_id", getTask);
routes.delete("/task/:_id", deleteTask);
routes.put("/task/:_id", updataTask);

module.exports = routes;
