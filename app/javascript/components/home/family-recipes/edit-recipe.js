import React, { Component } from 'react'

export default class EditRecipe extends Component {
  constructor (props) {
    super(props)
    const { recipe } = props
    if (recipe) {
      this.state = {
        name: recipe.name ? recipe.name : '',
        serves: recipe.serves ? recipe.serves : '',
        prepTime: recipe.prepTime ? recipe.prepTime : '',
        ingredients: recipe.ingredients ? recipe.ingredients : '',
        directions: recipe.directions ? recipe.directions : '',
        notes: recipe.notes ? recipe.notes : '',
        error: '',
        submitting: false
      }
    } else {
      this.state = {
        name: '',
        serves: '',
        prepTime: '',
        ingredients: '',
        directions: '',
        notes: '',
        error: '',
        submitting: false,
      }
    }
  }

  toggleSubmitting = (submitting) => {
    if (submitting === undefined) {
      submitting = !this.state.submitting
    }
    this.setState({ submitting })
  }

  addError = (error) => {
    this.setState({ error })
  }

  handleChange = (event) => {
    const fieldName = event.target.name
    const newValue = event.target.value
    this.setState({ [fieldName]: newValue })
  }

  handleSubmit = () => {
    const { recipe } = this.props
    this.toggleSubmitting(true)
    if (recipe) {
      this.submitEditRecipe(recipe)
    } else {
      this.submitCreateRecipe()
    }
  }

  closeModal = () => {
    document.getElementById(this.id()).style.display = "none"
  }

  id = () => {
    return (this.props.recipe ? `editRecipe${this.props.recipe.id}` : 'newRecipe')
  }

  clearForm = () => {
    this.setState({
      name: '',
      serves: '',
      prepTime: '',
      ingredients: '',
      directions: '',
      notes: '',
      error: '',
      submitting: false,
    })
  }

  submitCreateRecipe = () => {
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
        } else if (response.recipe) {
          this.props.addRecipe(JSON.parse(response.recipe))
          this.toggleSubmitting(false)
          this.closeModal()
          this.clearForm()
        }
      }.bind(this))
    }
  }

  submitEditRecipe = (recipe) => {
    if (!this.state.submitting) {
      $.ajax({
        type: 'PATCH',
        data: {
          name: this.state.name,
          serves: this.state.serves,
          prep_time: this.state.prepTime,
          ingredients: this.state.ingredients,
          directions: this.state.directions,
          notes: this.state.notes
        },
        url: `/recipe/${recipe.id}`,
        success: function(response) {
          if (response.error) {
            this.addError(response.error)
            this.toggleSubmitting(false)
          } else if (response.recipe) {
            this.props.editRecipe(this.props.index, JSON.parse(response.recipe))
            this.toggleSubmitting(false)
            this.closeModal()
          }
        }.bind(this),
        dataType: 'json'
      })
    }
  }

  render () {
    const { recipe } = this.props
    return (
      <div className='modal' id={this.id()}>
        <div className='modal-content'>
          <button className="button" onClick={this.closeModal}>Close</button>
          <h1>{recipe ? 'Edit Recipe' : 'New Recipe'}</h1>

          <div>
            {this.state.error.length > 0
              ? (<div className='error-message'><span>{this.state.error}</span></div>) : null}
            <label>Name</label>
            <input
              type='text'
              name='name'
              placeholder='Chocolate Pie'
              onChange={this.handleChange}
              value={this.state.name}
            />
            <label>Serves how many</label>
            <select 
              name="serves"
              onChange={this.handleChange}
              value={this.state.serves}
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
              value={this.state.prepTime}
            />
            <label>Ingredients</label>
            <textarea
              name='ingredients'
              onChange={this.handleChange}
              value={this.state.ingredients}
            />
            <label>Directions</label>
            <textarea
              name='directions'
              onChange={this.handleChange}
              value={this.state.directions}
            />
            <label>Notes</label>
              <textarea
                name='notes'
                onChange={this.handleChange}
                value={this.state.notes}
              />
            <a
              disabled={this.state.submitting}
              className='button'
              onClick={this.handleSubmit}>
                {recipe ? (this.state.submitting ? 'Updating Recipe...' : 'Update Recipe') :
                          (this.state.submitting ? 'Creating Recipe...' : 'Create Recipe')
                }
            </a>
          </div>

          <button className="close-button" data-close='' aria-label="Close modal" type="button">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    )
  }
}
