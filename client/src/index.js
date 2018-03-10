import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import ChuckJokes from './components/ChuckJokes';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

console.log('index.js hellloooo!!', store);

ReactDOM.render(
  <Provider store={store}>
    <App>
      <ChuckJokes />
    </App>
  </Provider>,
  document.querySelector('#root')
);
