export class TodoController {
  todo = [
    {
      id: 1,
      name: 'Aprender Node',
      status: 'Done',
    },
    {
      id: 2,
      name: 'Aprender Java',
      status: 'Progress',
    },
  ]

  getAll() {
    return this.todo
  }

  getById(id: number) {
    const data = this.todo.find((item) => item.id === id)
    return data
  }

  create(name: string, status: string) {
    this.todo.push({ id: Math.floor(Math.random() * 1000), name, status })
  }

  update(id: number, name: string, status: string) {
    const targetUpdate = this.todo.findIndex((item) => item.id === id)

    if (targetUpdate !== -1) {
      this.todo[targetUpdate] = { id, name, status }
    }
  }

  delete(id: number) {
    const targetDelete = this.todo.findIndex((item) => item.id === id)

    if (targetDelete !== -1) {
      this.todo.splice(targetDelete, 1)
    }
  }
}
