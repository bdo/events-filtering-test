import fetchEvents from '../utils/fetch-events'

export const FETCH = () => ({
  type: 'FETCH'
});

export const FETCH_SUCCESS = (events) => ({
  type: 'FETCH_SUCCESS', events
});

export const FETCH_ERROR = (error) => ({
  type: 'FETCH_ERROR', error
});

export const URL_CHANGED = (url) => {
  fetchEvents(url);
  return {
    type: 'URL_CHANGED',
    url
  };
};

export const FROM_CHANGED = (from) => ({
  type: 'FROM_CHANGED',
  from
});

export const TO_CHANGED = (to) => ({
  type: 'TO_CHANGED',
  to
});

