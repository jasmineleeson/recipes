import React, { Component } from 'react'
import EditRecipe from './edit-recipe'

export default class Recipe extends Component {
  constructor (props) {
    super(props)
    this.state = {
      recipe: this.props.recipe
    }
  }

  updateRecipe = (recipe) => {
    this.setState({ recipe })
  }

  render () {
    const { recipe } = this.state
    return (
      <div className='jasmine'>
        <h4>{recipe.name}</h4>
        <p>{`Serves: ${recipe.serves}`}</p>
        <p>{`Prep Time: ${recipe.prepTime}`}</p>
        <p>{`Ingredients: ${recipe.ingredients}`}</p>
        <p>{`Directions: ${recipe.directions}`}</p>
        <button className="button" data-open={`editRecipe${recipe.id}`}>Edit recipe</button>
        <EditRecipe recipe={recipe} updateRecipe={this.updateRecipe} />
      </div>
    )
  }
}
