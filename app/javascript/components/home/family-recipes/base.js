import React from 'react'
import SideBar from './side-bar'
import Recipes from './recipes'

export default function FamilyRecipesBase () {
  return (
    <div className="tabs-panel" id="panel2">
      <div className='row' >
        <SideBar />
        <Recipes />
      </div>
    </div>
  )
}
