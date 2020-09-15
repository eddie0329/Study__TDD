const express = require('express');
const router = express.Router();
const Todo = require('../model/Todo');

router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch(err) {
    res.json({ message: err });
  }
});

router.post('/', async (req, res) => {
  const { title } = req.body;
  const todo = new Todo({ title });
  try {
    const savedTodo = await todo.save();
    res.json(savedTodo);
  } catch(err) {
    res.json({ message: err });
  }
});

router.delete('/:todoId', async (req, res) => {
  try {
    const removedTodo = await Todo.deleteOne({ _id: req.params.todoId })
    res.json(removedTodo);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch('/todoStatus/:todoId', async (req, res) => {
  try {
    console.log('isDone', req.body.isDone);
    const changeTodoStatus = await Todo.updateOne({ _id: req.params.todoId }, { $set: { isDone: req.body.isDone }});
    res.json(changeTodoStatus);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
