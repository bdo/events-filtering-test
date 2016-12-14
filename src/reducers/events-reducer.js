import filterEvents from '../utils/filter-events'

const DEFAULT_STATE = {
  url: 'https://api.github.com/repos/rails/rails/events'
};

export default (state = DEFAULT_STATE, action) => {
  if (action.type == 'FETCH') {
    state = { ...state, loading: true, error: false };
  }
  if (action.type == 'FETCH_SUCCESS') {
    state = { ...state, events: action.events, loading: false, error: false };
  }
  if (action.type == 'FETCH_ERROR') {
    state = { ...state, loading: false, error: action.error };
  }
  if (action.type == 'URL_CHANGED') {
    state = { ...state, url: action.url };
  }
  if (action.type == 'TO_CHANGED') {
    state = { ...state, to: action.to };
  }
  if (action.type == 'FROM_CHANGED') {
    state = { ...state, from: action.from };
  }
  state = { ...state, filtered: filterEvents(state.events, state.from, state.to) };
  return state;
}


