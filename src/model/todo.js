import { observable, action } from "mobx";
import { bufferToggle } from "rxjs/operator/bufferToggle";

class Todo {
  @observable id;
  @observable title;
  @observable description;
  @observable isDone = false;

  constructor(id, title, description, isDone) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isDone = isDone;
  }

  @action toggle() {
    this.isDone = !this.isDone;
  }
}

export default Todo;