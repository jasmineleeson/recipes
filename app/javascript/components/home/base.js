import React, { Component } from 'react'
import FamilyProfileBase from './family-profile/base'
import FamilyRecipesBase from './family-recipes/base'
import Tabs from './tabs'

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

  switchTab = (e) => {
    const tab = e.target.id
    this.setState({
      activeTab: tab
    })
  }

  render () {
    return (
      <div className='tab-container'>
        <Tabs activeTab={this.state.activeTab} switchTab={this.switchTab} />
        <div className='tab-content'>
          {this.renderTab()}
        </div>
      </div>
    )
  }
}
