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

  create() {
     
  }

  update() {

  }

  delete() {

  }
}