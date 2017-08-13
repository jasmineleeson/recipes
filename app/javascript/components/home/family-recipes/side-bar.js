import React from 'react'
import NewRecipe from './new-recipe'

export default function SideBar () {
  return (
    <div className='small-3 columns jasmine'>
      
    <button className="button" data-open="newRecipe">Add recipe</button>
    <NewRecipe />
    </div>
  )
}
