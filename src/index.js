import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { createLogger } from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/App';

const logger = createLogger();
const middleware = [thunkMiddleware, logger];
const store = 
  createStore(rootReducer, applyMiddleware(...middleware));

ReactDOM.render(
<Provider store={ store } >
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
