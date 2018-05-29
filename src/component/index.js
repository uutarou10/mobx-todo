import React from 'react';
import DevTool from 'mobx-react-devtools';
import { hot } from 'react-hot-loader';
import Todo from './todo';

const app = ({store}) => (
  <div>
    <DevTool />
    <h1>Todo app</h1>
    <Todo store={store}/>
  </div>
)

export default hot(module)(app);
