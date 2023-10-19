export class TodoController {
  todo = [
    {
      "name": "Aprender Node",
      "status": "Done"
    },
    {
      "name": "Aprender Java",
      "status": "Progress"
    }
  ]

  getAll() {
    return this.todo
  }
}