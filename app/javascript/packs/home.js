import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Hello from '../components/home/base'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello />,
    document.body.appendChild(document.createElement('div')),
  )
})
