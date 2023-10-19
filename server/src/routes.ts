import { Router } from "express";
import { TodoController } from "./controllers/todoController";

export const router = Router()

const todoController = new TodoController()

router.get('/', (req, res) => {
  const todo = todoController.getAll()
  res.send(todo)
})

router.get('/:id', (req, res) => {
  const { id } = req.params
  const todo = todoController.getById(Number(id))
  res.send(todo)
})