const fs = require("fs");
const path = require("path");

const DATA_FILE = path.join(__dirname, "../Data/data.json");

function readTodos() {
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

function writeTodos(todos) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(todos, null, 2));
}

module.exports = {
  readTodos,
  writeTodos,
};
