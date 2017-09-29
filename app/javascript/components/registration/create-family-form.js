
import React, { Component } from 'react'

export default class FamilyForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      displayName: '',
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

  toggleSubmitting (submitting) {
    if (submitting === undefined) {
      submitting = !this.state.submitting
    }
    this.setState({ submitting })
  }

  handleSubmit = () => {
    this.toggleSubmitting(true)
    if (!this.state.submitting) {
      $.post('/create-family', {
        name: this.state.name,
        display_name: this.state.displayName
      }).then(function (response) {
        if (response.error) {
          this.addError(response.error)
          this.toggleSubmitting(false)
        } else {
          window.location.href = '/'
        }
      }.bind(this))
    }
  }

  render () {
    return (
        <div className='form'>
          {this.state.error.length > 0
          ? (<div className='error-message'><span>{this.state.error}</span></div>) : null}
          <div className='title'>Or create a new family</div>
          <input
            className='input'
            type='text'
            name='name'
            placeholder='leeson_family'
            onChange={this.handleChange}
          />
          <input
            className='input'
            type='text'
            name='displayName'
            placeholder='The Leeson Family'
            onChange={this.handleChange}
          />
          <a 
            className='button'
            onClick={this.handleSubmit}
            disabled={this.state.submitting}
          >
            {this.state.submitting ? 'Creating family...' : 'Create family'}
          </a>
        </div>
    )
  }
}
