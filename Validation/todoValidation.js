const Joi = require("joi");

exports.todoSchema = Joi.object({
  title: Joi.string().min(3).required(),
  completed: Joi.boolean().default(false),
});

exports.updateTodoSchema = Joi.object({
  title: Joi.string().min(3).optional(),
  completed: Joi.boolean().optional(),
});
