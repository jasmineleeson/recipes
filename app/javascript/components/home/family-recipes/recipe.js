import React, { Component } from 'react'
import EditRecipe from './edit-recipe'

export default class Recipe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      submitting: false,
      error: '',
    }
  }

  addError = (error) => {
    this.setState({ error })
  }

  toggleSubmitting = (submitting) => {
    if (submitting === undefined) {
      submitting = !this.state.submitting
    }
    this.setState({ submitting })
  }

  handleClick = (e) => {
    this.toggleSubmitting(true)
    if (!this.state.submitting) {
      $.ajax({
          type: 'DELETE',
          url: `/recipe/${this.props.recipe.id}`,
          success: function(response) {
            if (response.error) {
              this.addError(response.error)
              this.toggleSubmitting(false)
            } else {
              this.props.deleteRecipe(this.props.index)
              this.toggleSubmitting(false)
            }
          }.bind(this),
          dataType: 'json'
        })
    }
  }

  render () {
    const { index, recipe, editRecipe } = this.props
    return (
      <div className='jasmine'>
        <h4>{recipe.name}</h4>
        <p>{`Serves: ${recipe.serves}`}</p>
        <p>{`Prep Time: ${recipe.prepTime}`}</p>
        <p>{`Ingredients: ${recipe.ingredients}`}</p>
        <p>{`Directions: ${recipe.directions}`}</p>
        <button className="button" data-open={`editRecipe${recipe.id}`}>Edit recipe</button>
        <EditRecipe recipe={recipe} editRecipe={editRecipe} index={index} />
        <button className="alert button" onClick={this.handleClick} disabled={this.state.submitting}>
          {this.state.submitting ? 'Deleting Recipe...' : 'Delete Recipe'}
        </button>
      </div>
    )
  }
}
