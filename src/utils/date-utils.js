import moment from 'moment'

const INPUT_FORMAT = 'DD/MM/YYYY HH:mm';
const EVENT_FORMAT = 'D MMM HH:mm';

export const formatInputDate = (date) => date.format(INPUT_FORMAT);

export const parseInputDate = (text) => moment(text, INPUT_FORMAT);

export const formatEventDate = (date) => date.format(EVENT_FORMAT);

export const parseEventDate = (text) => moment(text);
