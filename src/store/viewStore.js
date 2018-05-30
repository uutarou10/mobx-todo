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
}

export default ViewStore;