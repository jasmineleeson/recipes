import React from 'react'
import { Switch, Route } from 'react-router-dom'
import FamilyProfileBase from './family-profile/base'
import FamilyRecipesBase from './family-recipes/base'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={FamilyProfileBase} />
      <Route exact path='/family-recipes' component={FamilyRecipesBase} />
    </Switch>
  )
}
