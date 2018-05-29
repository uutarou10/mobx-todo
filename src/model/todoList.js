import { observable, action } from "mobx";

class TodoList {
  @observable list = [];

  @action
  addTodo(todo) {
    this.list.push(todo)
  }
}

export default TodoList;