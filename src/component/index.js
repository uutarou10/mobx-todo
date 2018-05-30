import React from 'react';
import DevTool from 'mobx-react-devtools';
import { hot } from 'react-hot-loader';

const app = ({store}) => (
  <div>
    <DevTool />
    <h1>Todo app</h1>
  </div>
)

export default hot(module)(app);
