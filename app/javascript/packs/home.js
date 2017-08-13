import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import HomeBase from '../components/home/base'

const rootElement = document.getElementById('home')
const props = JSON.parse(rootElement.getAttribute('data-react-props'))

ReactDOM.render( <HomeBase {...props} />, rootElement)
