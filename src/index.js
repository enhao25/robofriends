import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import './index.css';
import { searchRobots, requestRobots } from './reducers'
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import logger from 'redux-logger';

const rootReducer = combineReducers({ searchRobots, requestRobots })

// Store can be passed down as a prop
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, logger))

ReactDOM.render(<Provider store={store}> <App /> </Provider>, document.getElementById('root'));
registerServiceWorker();
