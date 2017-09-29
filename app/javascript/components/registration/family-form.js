import React from 'react'
import JoinFamilyForm from './join-family-form'
import CreateFamilyForm from './create-family-form'

export default function FamilyForm () {
  return (
    <div className='fullpage-form'>
      <JoinFamilyForm />
      <h1 className='or'>OR</h1>
      <CreateFamilyForm />
    </div>
  )
}
