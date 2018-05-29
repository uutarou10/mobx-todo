import { observable, action, autorun } from "mobx";

class Todo {
  constructor(id = 0, title, description, isDone = false) {
    this.id = id;
    this.title = title;
    this.description = description;

    autorun(() => {
      console.log("state changed!", this.isDone);
    })
  }

  @observable id = 0;
  @observable title = "";
  @observable description = "";
  @observable isDone = false;

  @action
  setTitle(title) {
    this.title = title;
  }

  @action
  setDescription(description) {
    this.description = description;
  }

  @action
  setCompleted(isDone) {
    this.isDone = isDone;
  }
}

export default Todo;