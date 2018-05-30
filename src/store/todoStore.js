import { observable, action } from "mobx";
import Todo from '../model/todo';

class TodoStore {
  @observable todos = [];

  @action addTask(title, description) {
    this.todos.push(new Todo(
      Math.random(),
      title,
      description,
      false
    ));
  }
}

export default TodoStore;