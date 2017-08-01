import React from 'react'
import ReactDOM from 'react-dom'
import RegistrationBase from '../components/registration/base'
import { BrowserRouter } from 'react-router-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <BrowserRouter>
      <RegistrationBase />
    </BrowserRouter>,
    document.body.appendChild(document.createElement('div')),
  )
})
