import React from 'react';
import { observer, inject } from 'mobx-react';
import ListItem from './ListItem';
import EmptyTask from './EmptyTask';

const List = inject('todo')(
  observer(({ todo }) => (
    <div>
      {todo.todos.length === 0 ? (
        <div>
          <EmptyTask />
        </div>
      ) : (
        todo.todos.map((todo) => (
          <ListItem todo={todo} key={todo.id} />
        ))
      )}
    </div>
  ))
);

export default List