const express = require("express");
const app = express();

app.use(express.json());

const todoRoutes = require("./Routes/todoRoutes");

app.get("/", (req, res) => {
  res.send("Welcome to the Todo API");
});

app.use("/todos", todoRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000...");
});
