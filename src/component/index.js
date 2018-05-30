import React from 'react';
import DevTool from 'mobx-react-devtools';
import { hot } from 'react-hot-loader';
import Todo from './Todo';

const app = ({store}) => (
  <div>
    <DevTool />
    <h1>Todo app</h1>
    <Todo />
  </div>
)

export default hot(module)(app);
