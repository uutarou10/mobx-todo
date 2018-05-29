import React from 'react';
import ListItem from './listItem';
import Form from './form';

const Todo = ({store}) => (
  <React.Fragment>
    <Form viewStore={store.viewStore}/>
    <ul>
      {store.todoList.list.map(todo => (
        <ListItem todo={todo} key={todo.id} />
      ))}
    </ul>
  </React.Fragment>
);

export default Todo;