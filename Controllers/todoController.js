const { readTodos, writeTodos } = require("../Models/todoModel");

exports.getTodos = (req, res) => {
  const todos = readTodos();
  res.json({ success: true, todos });
};

exports.createTodo = (req, res) => {
  const { title, completed } = req.body;

  if (!title) {
    return res
      .status(400)
      .json({ success: false, message: "Title is required" });
  }

  const todos = readTodos();

  const newTodo = {
    id: Date.now(),
    title,
    completed: completed || false,
  };

  todos.push(newTodo);
  writeTodos(todos);

  res.status(201).json({ success: true, todo: newTodo });
};

exports.updateTodo = (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  const todos = readTodos();
  const index = todos.findIndex((t) => t.id == id);

  if (index === -1) {
    return res.status(404).json({ success: false, message: "Todo not found" });
  }

  todos[index] = {
    ...todos[index],
    title: title ?? todos[index].title,
    completed: completed ?? todos[index].completed,
  };

  writeTodos(todos);
  res.json({ success: true, todo: todos[index] });
};

exports.deleteTodo = (req, res) => {
  const { id } = req.params;

  const todos = readTodos();
  const filtered = todos.filter((t) => t.id != id);

  if (todos.length === filtered.length) {
    return res.status(404).json({ success: false, message: "Todo not found" });
  }

  writeTodos(filtered);
  res.json({ success: true, message: "Todo deleted successfully" });
};
