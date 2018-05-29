import React from 'react';
import { observer } from 'mobx-react';

// TODO: Edit機能
const ListItem = observer(({todo}) => (
  <li>
    <input type="checkbox" checked={todo.isDone} onChange={e => todo.setCompleted(e.target.checked)} />
    <span style={{
      textDecoration: todo.isDone ? 'line-through' : 'none'
    }}>{todo.title} - <small>{todo.description}</small></span>
  </li>
));

export default ListItem;