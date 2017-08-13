import React from 'react'
import Recipe from './recipe'

export default function Recipes ({ recipes }) {
  return (
    <div className='small-9 columns jasmine'>
      {recipes.map((recipe, index) =>
        <Recipe key={index} recipe={recipe} />
      )}
    </div>
  )
}
