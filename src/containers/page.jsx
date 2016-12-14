import React from 'react'
import { connect } from 'react-redux'

import Events from '../components/events'
import Filters from './filters'

function display({ events, error, loading }) {
  if (error)
    return <p className="notice error">{error}</p>;

  if (loading)
    return <p className="notice">Loading events</p>;

  return <Events events={events}/>;
}

export const Page = ({ events, error, loading }) => {
  return (
    <div>
      <header>
        <h1 className="title">Events filtering demo</h1>
      </header>
      <Filters />
      {display({ events, error, loading })}
    </div>
  )
};

export default connect(state => ({
  events: state.filtered,
  error: state.error,
  loading: state.loading
}))(Page);
