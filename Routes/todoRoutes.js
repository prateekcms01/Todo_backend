const express = require("express");
const router = express.Router();
const todoController = require("../Controllers/todoController");
const validate = require("../middleware/validate");
const {
  todoSchema,
  updateTodoSchema,
} = require("../Validation/todoValidation");

router.get("/gettasks", todoController.getTodos);
router.post("/createtask", validate(todoSchema), todoController.createTodo);
router.put(
  "/updatetask/:id",
  validate(updateTodoSchema),
  todoController.updateTodo
);
router.delete("/deletetask/:id", todoController.deleteTodo);

module.exports = router;
