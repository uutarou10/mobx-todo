import TodoList from "../model/todoList";

class Store {
  todoList;

  constructor() {
    this.todoList = new TodoList();
  }
}

export default Store;