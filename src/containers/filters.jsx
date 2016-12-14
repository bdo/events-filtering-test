import React from 'react'
import { connect } from 'react-redux'
import { URL_CHANGED, FROM_CHANGED, TO_CHANGED } from '../actions/events-actions'

export const Filters = ({ url, from, to, onUrlChanged, onFromChanged, onToChanged }) => {
  return (
    <form className="filters">
      <div className="row">
        <label htmlFor="url">Github stream URL</label>
        <input className="filters__url" name="url"
               placeholder="e.g. https://api.github.com/events"
               onChange={(e) => onUrlChanged(e.target.value)}
               defaultValue={url}
        />
      </div>
      <div className="row">
        <label htmlFor="from">From</label>
        <input name="from" placeholder="DD/MM/YYYY HH:mm"
               onChange={(e) => onFromChanged(e.target.value)}
               defaultValue={from}
        />
      </div>
      <div className="row">
        <label htmlFor="to">To</label>
        <input name="to" placeholder="DD/MM/YYYY HH:mm"
               onChange={(e) => onToChanged(e.target.value)}
               defaultValue={to}
        />
      </div>
    </form>
  )
};

const mapDispatchToProps = (dispatch, props) => ({
  onUrlChanged: (url) => dispatch(URL_CHANGED(url)),
  onFromChanged: (from) => dispatch(FROM_CHANGED(from)),
  onToChanged: (to) => dispatch(TO_CHANGED(to))
});

export default connect(
  state => state,
  mapDispatchToProps
)(Filters);
