import React from 'react';
import { render } from 'react-dom';
import RootComponent from './component'
import Store from './store';
import Todo from './model/todo';

const store = new Store();
store.todoList.addTodo(new Todo(0, 'hoge', 'fuga', true))
store.todoList.addTodo(new Todo(1, 'hoge', 'fuga', true))

render(
  <RootComponent store={store} />,
  document.getElementById('root')
);