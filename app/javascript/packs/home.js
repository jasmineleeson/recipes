import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import HomeBase from '../components/home/base'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <HomeBase />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
