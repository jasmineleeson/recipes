import React from 'react'
import ReactDOM from 'react-dom'
import RegistrationBase from '../components/registration/base'
import { BrowserRouter } from 'react-router-dom'

const rootElement = document.getElementById('signup')

ReactDOM.render(
  <BrowserRouter>
    <RegistrationBase />
  </BrowserRouter>, rootElement
)
