import React, { Component } from 'react'
import SideBar from './side-bar'
import Recipes from './recipes'

export default class FamilyRecipesBase extends Component {

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

  componentDidMount () {
    $.get('/home-data').then(function (response) {
      this.setState({
        recipes: response.recipes
      })
    }.bind(this))
  }

  editRecipe = (index, recipe) => {
    let recipes = this.state.recipes
    recipes[index] = recipe
    this.setState({ recipes })
  }


  render () {
    if (this.state) {
      return (
        <div className='row' >
          <SideBar addRecipe={this.addRecipe} />
          <Recipes editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} recipes={this.state.recipes} />
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}
