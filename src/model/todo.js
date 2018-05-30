import { observable, action } from "mobx";
import { bufferToggle } from "rxjs/operator/bufferToggle";

class Todo {
  @observable id;
  @observable title;
  @observable description;
  @observable isDone = false;

  @action toggle() {
    this.isDone = !this.isDone;
  }
}