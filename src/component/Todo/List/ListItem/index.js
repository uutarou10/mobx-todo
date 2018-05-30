import React from 'react';
import { observer } from 'mobx-react';

const ListItem = observer(({ todo }) => (
  <div>
    <div>
      <input type="checkbox" checked={todo.isDone} onChange={() => todo.toggle()} />
    </div>
    <div>
      <p>{ todo.title }</p>
      <p>{ todo.description }</p>
    </div>
  </div>
));

export default ListItem;