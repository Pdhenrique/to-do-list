export class TodoController {
  todo = [
    {
      "id": 1,
      "name": "Aprender Node",
      "status": "Done"
    },
    {
      "id": 2,
      "name": "Aprender Java",
      "status": "Progress"
    }
  ]

  getAll() {
    return this.todo
  }

  getById(id: number) {
    const data = this.todo.find(item => item.id === id);
    return data;
  }

  create(name: string, status: string) {
    this.todo.push({ id: Math.floor(Math.random() * 1000), name, status })
  }

  update() {

  }

  delete() {

  }
}