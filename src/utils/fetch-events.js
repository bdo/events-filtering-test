import store from '../store.js'
import { FETCH, FETCH_ERROR, FETCH_SUCCESS } from '../actions/events-actions'

export default (url) => {
  store.dispatch(FETCH());
  fetch(url)
    .then(response => response.json())
    .then(events => {
      if (events.message) {
        store.dispatch(FETCH_ERROR(events.message));
      } else {
        store.dispatch(FETCH_SUCCESS(events));
      }
    });
}

