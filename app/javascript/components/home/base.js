import React from 'react'
import FamilyProfileBase from './family-profile/base'
import FamilyRecipesBase from './family-recipes/base'

export default function HomeBase () {
  return (
    <div>
      <div className="row">
        <div className="columns">
          <ul className="tabs" data-tabs id="example-tabs">
            <li className="tabs-title is-active"><a href="#panel1" aria-selected="true">Tab 1</a></li>
            <li className="tabs-title"><a href="#panel2">Tab 2</a></li>
          </ul>

          <div className="tabs-content" data-tabs-content="example-tabs">
            <FamilyProfileBase />
            <FamilyRecipesBase />
          </div>
        </div>
      </div>
    </div>
  )
}
