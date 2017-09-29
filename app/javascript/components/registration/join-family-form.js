import React, { Component } from 'react'

export default class FamilyForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
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
      $.post('/join-family', {
        name: this.state.name,
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
          <div className='title'>Join an existing family</div>
          <input
            className='input'
            type='text'
            name='name'
            placeholder='leeson_family'
            onChange={this.handleChange}
          />
          <a 
            className='button'
            onClick={this.handleSubmit}
            disabled={this.state.submitting}
          >
            {this.state.submitting ? 'Joining family...' : 'Join family'}
          </a>
        </div>
    )
  }
}