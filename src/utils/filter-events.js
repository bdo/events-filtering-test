import { parseEventDate, parseInputDate } from '../utils/date-utils'

export default (events, from, to) => {
  from = parseInputDate(from);
  to = parseInputDate(to);
  let filtered = events;
  if (events && from.isValid())
    filtered = filtered.filter(event => parseEventDate(event.created_at).isAfter(from));
  if (events && to.isValid())
    filtered = filtered.filter(event => parseEventDate(event.created_at).isBefore(to));
  return filtered;
}


