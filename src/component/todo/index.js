import React from 'react';
import ListItem from './listItem';

const Todo = ({todoList}) => (
  <ul>
    {todoList.list.map(todo => (
      <ListItem todo={todo} key={todo.id} />
    ))}
  </ul>
);

export default Todo;