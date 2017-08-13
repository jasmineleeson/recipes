import React from 'react'

export default function Recipe ({ recipe }) {
  return (
    <div className='jasmine'>
      <h4>{recipe.name}</h4>
      <p>{`Serves: ${recipe.serves}`}</p>
      <p>{`Prep Time: ${recipe.prepTime}`}</p>
      <p>{`Ingredients: ${recipe.ingredients}`}</p>
      <p>{`Directions: ${recipe.directions}`}</p>
    </div>
  )
}
