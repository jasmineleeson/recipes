import React from 'react'
import Routes from './routes'
import { Link } from 'react-router-dom'

export default function HomeBase () {
  return (
    <div>
      <div className="small-12 medium-9 small-centered columns">
        <div className="jasmine">
          <Link to={`/`}>Family Profile</Link>
          <Link to={`/family-recipes`}>Family Recipes</Link>
          <Routes />
        </div>
      </div>
    </div>
  )
}
