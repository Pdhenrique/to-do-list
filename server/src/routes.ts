import { Router } from "express";
import { TodoController } from "./controllers/todoController";

export const router = Router()

const todoController = new TodoController()

router.get('/', (req, res) => {
  const todo = todoController.getAll()
  res.send(todo)
})

