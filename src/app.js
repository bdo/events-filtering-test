import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import watch from 'redux-watch'

import store from './store'
import Page from './containers/page'
import fetchEvents from './utils/fetch-events'

import './styles/app.sass'

fetchEvents(store.getState().url);

let w = watch(store.getState, "url");
store.subscribe(w(fetchEvents));

const main = document.createElement('div');
document.body.appendChild(main);

ReactDOM.render(
  <Provider store={store}>
    <Page/>
  </Provider>,
  main
);
