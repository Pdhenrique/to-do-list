import { Router } from "express";
import { TodoController } from "./controllers/todoController";

export const router = Router();

const todoController = new TodoController();

router.get("/", (req, res) => {
  const todo = todoController.getAll();
  res.send(todo);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const todo = todoController.getById(Number(id));
  res.send(todo);
});

router.post("/", (req, res) => {
  const { name, status } = req.body;

  todoController.create(name, status);
  res.send("Tarefa criada.");
});

router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, status } = req.body;

  todoController.update(Number(id), name, status);
  res.send("Tarefa atualizada");
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  
  todoController.delete(Number(id));
  res.send("Tarefa deletada");
})
