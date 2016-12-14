import { createStore, applyMiddleware } from 'redux'
import createLogger from 'redux-logger'

import reducer from './reducers/events-reducer'

const loggerMiddleware = createLogger();

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

export default store;

