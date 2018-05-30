import { observable, action } from 'mobx';

class ViewStore {
  @observable draftTitle = '';
  @observable draftDescription = '';

  @action setDraftTitle(title) {
    this.draftTitle = title;
  }

  @action setDraftDescription(description) {
    this.draftDescription = description;
  }

  @action resetForm() {
    this.draftTitle = "";
    this.draftDescription = "";
  }
}

export default ViewStore;