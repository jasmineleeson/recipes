import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class CreateAccountForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      error: '',
      submitting: false,
    }
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    const newValue = event.target.value
    this.setState({ [fieldName]: newValue })
  }

  addError (error) {
    this.setState({ error })
  }

  removeError () {
    this.setState({
      error: '',
    })
  }

  toggleSubmitting = (submitting) => {
    if (submitting === undefined) {
      submitting = !this.state.submitting
    }
    this.setState({ submitting })
  }

  handleSubmit = () => {
    this.toggleSubmitting(true)
    if (!this.state.submitting) {
      $.post('/signup', {
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        email: this.state.email,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      }).then(function (response) {
        if (response.error) {
          this.addError(response.error)
          this.toggleSubmitting(false)
        } else {
          this.props.history.push('/family')
        }
      }.bind(this))
    }
  }

  render () {
    return (
        <div>
          {this.state.error.length > 0
          ? (<div className='error-message'><span>{this.state.error}</span></div>) : null}
          <div className='title'>Sign up</div>
          <input
            type='text'
            name='firstName'
            placeholder='Jasmine'
            onChange={this.handleChange}
          />
          <input
            type='text'
            name='lastName'
            placeholder='Leeson'
            onChange={this.handleChange}
          />
          <input
            type='email'
            name='email'
            placeholder='jasmine.leeson@gmail.com'
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='password'
            placeholder='Choose a password'
            onChange={this.handleChange}
          />
          <input
            type='password'
            name='passwordConfirmation'
            placeholder='Confirm password'
            onChange={this.handleChange}
          />
          <a 
            className='button'
            onClick={this.handleSubmit}
            disabled={this.state.submitting}
          >
            {this.state.submitting ? 'Getting Started...' : 'Get Started'}
          </a>
        </div>
    )
  }
}

export default withRouter(CreateAccountForm)
