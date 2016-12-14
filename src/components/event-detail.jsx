import React from 'react'
import markdownit from 'markdown-it'

import { walk, getEventName, TEXT_PATHS, URL_PATHS, EVENT_DESCRIPTION } from '../utils/event-details-utils'

const markdown = markdownit({ linkify: true });

export default (event) => {
  const detail = walk(event.payload, TEXT_PATHS[event.type]);
  const url = walk(event.payload, URL_PATHS[event.type]);
  const detailHtml = detail ? markdown.render(detail) : '';
  return (
    <div className="event__details">
      <h2>{EVENT_DESCRIPTION[event.type]}</h2>
      <div dangerouslySetInnerHTML={{ __html: detailHtml }}/>
      {url && (
        <a className="link" href={url} target='_blank'>Link to {getEventName(event.type)}</a>
      )}
    </div>
  )
};

