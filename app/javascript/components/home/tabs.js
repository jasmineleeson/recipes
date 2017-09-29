import React from 'react'

export default function Tabs ({ activeTab, switchTab})  {
  return (
    <div className='tab-group'>
      <div className={`tab ${activeTab === 'family' ? 'active-tab' : ''}`} id='family' onClick={switchTab} >Family</div>
      <div className={`tab ${activeTab === 'recipes' ? 'active-tab' : ''}`} id='recipes' onClick={switchTab} >Recipes</div>
    </div>
  )
}
