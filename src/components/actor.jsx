import React from 'react'

function userUrl(login) {
  return 'https://github.com/' + login;
}

export default ({ login, avatar_url }) =>
  <a className="event__actor" href={userUrl(login)} title={login}>
    <img className="event__actor__image" src={`${avatar_url}?s=60`}/>
  </a>
