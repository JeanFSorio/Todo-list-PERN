const express = require('express');
const routes = express.Router();
const TodoController = require('./Controllers/TodoController');

//ROUTES
//get every the task
routes.get("/todos", TodoController.index)

//select one task to show
routes.get("/todos/:id", TodoController.select)

//create one task
routes.post("/todos", TodoController.create);

//update the task
routes.put("/todos/:id",TodoController.update);

//delete the task
routes.delete("/todos/:id", TodoController.delete)

module.exports = routes;