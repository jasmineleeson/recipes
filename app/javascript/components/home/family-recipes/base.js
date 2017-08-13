import React, { Component } from 'react'
import SideBar from './side-bar'
import Recipes from './recipes'

export default class FamilyRecipesBase extends Component {
  constructor (props) {
    super(props)
    this.state = {
      recipes: this.props.recipes
    }
  }

  addRecipe = (recipe) => {
    const recipes = this.state.recipes
    recipes.push(recipe)
    this.setState({ recipes })
  }

  deleteRecipe = (index) => {
    let recipes = this.state.recipes
    recipes.splice(index, 1)
    this.setState({ recipes })
  }

  editRecipe = (index, recipe) => {
    let recipes = this.state.recipes
    recipes[index] = recipe
    this.setState({ recipes })
  }

  render () {
    return (
      <div className="tabs-panel" id="panel2">
        <div className='row' >
          <SideBar addRecipe={this.addRecipe} />
          <Recipes editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} recipes={this.state.recipes} />
        </div>
      </div>
    )
  }
}
