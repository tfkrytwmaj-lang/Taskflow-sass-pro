const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

let tasks = [];

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  res.json({ message: "added" });
});

app.delete("/tasks/:id", (req, res) => {
  tasks = tasks.filter((_, i) => i != req.params.id);
  res.json({ message: "deleted" });
});

app.listen(5000, () => console.log("Server running"));