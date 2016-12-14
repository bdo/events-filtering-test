import React from 'react'

import Event from './event'

export default ({ events }) =>
  <div className="events">
    {events.length > 0 ? events.map(event => <Event key={event.id} {...event}/>) : (
        <p className="notice">No events match your filters</p>
      )}
  </div>

