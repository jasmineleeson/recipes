import React from 'react'

export default function FamilyProfileBase ({ family }) {
  return (
    <div className="tabs-panel is-active" id="panel1">
      {family.familyMembers.map((familyMember, index) =>
        <p key={index}>{`${familyMember.firstName} ${familyMember.lastName}`}</p>
      )}
    </div>
  )
}
