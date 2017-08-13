import React from 'react'
import EditRecipe from './edit-recipe'

export default function SideBar ({ addRecipe }) {
  return (
    <div className='small-3 columns jasmine'>
      
    <button className="button" data-open="newRecipe">Add recipe</button>
    <EditRecipe addRecipe={addRecipe} />
    </div>
  )
}
