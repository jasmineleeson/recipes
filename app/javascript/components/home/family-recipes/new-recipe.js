import React, { Component } from 'react'

export default class NewRecipe extends Component {
  constructor () {
    super()
    this.state = {
      name: '',
      serves: null,
      prepTime: '',
      ingredients: '',
      directions: '',
      notes: '',
      error: '',
      submitting: false,
    }
  }

  toggleSubmitting = (submitting) => {
    if (submitting === undefined) {
      submitting = !this.state.submitting
    }
    this.setState({ submitting })
  }

  addError (error) {
    this.setState({ error })
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    const newValue = event.target.value
    this.setState({ [fieldName]: newValue })
  }

  handleSubmit = () => {
    this.toggleSubmitting(true)
    if (!this.state.submitting) {
      $.post('/recipe', {
        name: this.state.name,
        serves: this.state.serves,
        prep_time: this.state.prepTime,
        ingredients: this.state.ingredients,
        directions: this.state.directions,
        notes: this.state.notes,
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
      <div className="reveal" id='newRecipe' data-reveal=''>
        <h1>New Recipe</h1>
          <div>
            {this.state.error.length > 0
              ? (<div className='error-message'><span>{this.state.error}</span></div>) : null}
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Chocolate Pie'
              onChange={this.handleChange}
            />
            <label>Serves how many</label>
            <select 
              name="serves"
              onChange={this.handleChange}
            >
              <option value=''></option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
            <label>Prep Time</label>
            <input
              type='text'
              name='prepTime'
              placeholder='1h'
              onChange={this.handleChange}
            />
            <label>Ingredients</label>
            <input
              type='text'
              name='ingredients'
              onChange={this.handleChange}
            />
            <label>Directions</label>
            <input
              type='text'
              name='directions'
              onChange={this.handleChange}
            />
            <label>Notes</label>
              <input
                type='text'
                name='notes'
                onChange={this.handleChange}
              />
            <a
              disabled={this.state.submitting}
              className='button'
              onClick={this.handleSubmit}>
                {this.state.submitting ? 'Creating Recipe...' : 'Create Recipe'}
            </a>
          </div>
        <button className="close-button" data-close='' aria-label="Close modal" type="button">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  }
}
