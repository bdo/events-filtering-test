import React from 'react'

import { parseEventDate, formatEventDate } from '../utils/date-utils'
import Actor from './actor'
import EventDetails from './event-detail'

export default (event) => {
  const { created_at, actor } = event;
  return (
    <div className="event">
      <div className="event__actor-and-date event__cell">
        <Actor {...actor} />
        <div className="event__date">
          {formatEventDate(parseEventDate(created_at))}
        </div>
      </div>
      <div className="event__info event__cell">
        <EventDetails {...event} />
      </div>
    </div>
  )
}
