import React, { Component } from 'react'
import FamilyProfileBase from './family-profile/base'
import FamilyRecipesBase from './family-recipes/base'

export default class HomeBase extends Component {
  constructor () {
    super()
    this.state = {
      activeTab: 'family'
    }
  }

  renderTab () {
    if (this.state.activeTab == 'family') {
      return <FamilyProfileBase />
    } else if (this.state.activeTab == 'recipes') {
      return <FamilyRecipesBase />
    }
  }

  switchTab = () => {
    this.setState({
      activeTab: this.state.activeTab === 'family' ? 'recipes' : 'family'
    })
  }

  render () {
    return (
      <div>
        <button className='button' onClick={this.switchTab}>switchTab</button>
        {this.renderTab()}
      </div>
    )
  }
}
