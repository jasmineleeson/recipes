import React from 'react'
import Recipe from './recipe'

export default function Recipes ({ recipes, deleteRecipe, editRecipe }) {
  return (
    <div className='small-9 columns jasmine'>
      {recipes.map((recipe, index) =>
        <Recipe key={index} index={index} recipe={recipe} deleteRecipe={deleteRecipe} editRecipe={editRecipe} />
      )}
    </div>
  )
}
