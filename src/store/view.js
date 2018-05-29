import { observable, action, autorun } from "mobx";

class View {
  constructor() {
    autorun(() => {
      console.log("Title changed:", this.draftTodoTitle)
    })
    autorun(() => {
      console.log("Description changed:", this.draftTodoDescription)
    })
  }

  @observable draftTodoTitle = "";
  @observable draftTodoDescription = "";

  @action
  setDraftTodoTitle(title) {
    this.draftTodoTitle = title;
  }

  @action
  setDraftTodoDescription(description) {
    this.draftTodoDescription = description;
  }
}

export default View;