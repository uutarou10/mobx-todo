import { observable, action, computed } from 'mobx';

class ViewStore {
  @observable draftTitle = '';
  @observable draftDescription = '';

  @action setDraftTitle(title) {
    this.draftTitle = title;
  }

  @action setDraftDescription(description) {
    this.draftDescription = description;
  }

  @computed get isValidForm() {
    return !(this.draftTitle.length > 0 && this.draftDescription.length > 0)
  }

  @action resetForm() {
    this.draftTitle = "";
    this.draftDescription = "";
  }
}

export default ViewStore;