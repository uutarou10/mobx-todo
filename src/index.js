import React from 'react';
import { render } from 'react-dom';
import App from './component';
import { Provider } from 'mobx-react';
import { initStores } from './store';
import api from './api';

const stores = initStores();

api.todos.index().then((data) => {
  console.log(data.body)
})

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);