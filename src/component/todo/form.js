import React from 'react';
import { observer } from 'mobx-react';

const Form = observer(({viewStore}) => (
  <div>
    <label>Title</label>
    <input type="text" value={viewStore.draftTitle} onChange={e => viewStore.setDraftTodoTitle(e.target.value)} />
    <label>Description</label>
    <input type="text" value={viewStore.draftDescription} onChange={e => viewStore.setDraftTodoDescription(e.target.value)} />
    <button>Add!</button>
  </div>
));

export default Form;