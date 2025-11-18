# To-Do CRUD API (Node.js + Express + MVC + Joi Validation)

A simple To-Do REST API built using **Node.js**, **Express.js**, **MVC architecture**, and **Joi validation**, with data stored in a local `data.json` file (no database required).

FEATURES:

- MVC folder structure
- JSON file used as database
- CRUD operations (Create, Read, Update, Delete)
- Input validation using Joi
- Clean routing & controllers
- Beginner-friendly and scalable

git clone
cd Backend
npm install
npm run dev

Server runs at: http://localhost:5000

1. Create task : POST

localhost:5000/todos/createtask

{
"title": "Learn Express",
"completed": false
}
If data enter less than 3 length
{
"success": false,
"message": "\"title\" is required"
}
response:
{
"success": true,
"todo": {
"id": 1763479683313,
"title": "Need to eat mango",
"completed": true
}
}

2. get task : GET

localhost:5000/todos/gettasks

response:

{
"success": true,
"todos": [
{
"id": 1763478857923,
"title": "Need to do task",
"completed": false
},
{
"id": 1763478882335,
"title": "Need to eat apple",
"completed": false
}
]
}

3. Update Task : PUT

localhost:5000/todos/updatetask/:id

{

    "completed":true

}
localhost:5000/todos/updatetask/1763478882335
response:
{
"success": true,
"todo": {
"id": 1763478882335,
"title": "Need to eat apple",
"completed": true
}
}

4. Delete task: DELETE

localhost:5000/todos/deletetask/:id

localhost:5000/todos/deletetask/1763479635163

response:
{
"success": true,
"message": "Todo deleted successfully"
}
