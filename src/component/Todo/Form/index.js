import React from 'react';
import { inject, observer } from 'mobx-react';

const Form = inject('view', 'todo')(
  observer(({view, todo}) => (
    <div>
      <h2>Add new task!</h2>
      <label>
        Title
        <input
          type="input"
          value={view.draftTitle}
          onChange={e => view.setDraftTitle(e.target.value)}
        />
      </label>
      <label>
        Description
        <input
          type="input"
          value={view.draftDescription}
          onChange={e => view.setDraftDescription(e.target.value)}
        />
      </label>
      <button onClick={() => {
        todo.addTask(view.draftTitle, view.draftDescription)
        view.resetForm();
      }}>ADD</button>
    </div>
  ))
);

export default Form;