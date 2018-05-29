import TodoList from "../model/todoList";
import View from "./view";

class Store {
  todoList;
  viewStore;

  constructor() {
    this.todoList = new TodoList();
    this.viewStore = new View();
  }
}

export default Store;