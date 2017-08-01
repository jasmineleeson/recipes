import React from 'react'
import { Switch, Route } from 'react-router-dom'
import CreateAccountForm from './create-account-form'
import FamilyForm from './family-form'

export default function Routes () {
  return (
    <Switch>
      <Route exact path='/signup' component={CreateAccountForm} />
      <Route exact path='/family' component={FamilyForm} />
    </Switch>
  )
}
