import React from 'react';
import { render } from 'react-dom';
import App from './component';
import { Provider } from 'mobx-react';
import { initStores } from './store';

const stores = initStores();

render(
  <Provider {...stores}>
    <App />
  </Provider>,
  document.getElementById('root')
);