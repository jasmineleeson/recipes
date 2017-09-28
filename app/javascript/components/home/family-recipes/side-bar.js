import React, { Component } from 'react'
import EditRecipe from './edit-recipe'

export default class SideBar extends Component {
  openModal () {
    document.getElementById('newRecipe').style.display = "block"
  }

  render () {
    return (
      <div className='small-3 columns jasmine'>
        
      <button className="button" onClick={this.openModal}>Add recipe</button>
      <EditRecipe addRecipe={this.props.addRecipe} />
      </div>
    )
  }
}
