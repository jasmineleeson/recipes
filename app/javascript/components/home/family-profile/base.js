import React, { Component } from 'react'

export default class FamilyProfileBase extends Component {

  componentDidMount () {
    $.get('/home-data').then(function (response) {
      this.setState({
        family: response.family
      })
    }.bind(this))
  }

  render () {
    if (this.state) {
      return (
        <div>
          <h1>{this.state.family.displayName}</h1>
          {this.state.family.familyMembers.map((familyMember, index) =>
            <p key={index}>{`${familyMember.firstName} ${familyMember.lastName}`}</p>
          )}
        </div>
      )
    } else {
      return <div>loading</div>
    }
  }
}