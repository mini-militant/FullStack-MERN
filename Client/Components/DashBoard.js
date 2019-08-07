import React from 'react'
import {connect} from 'react-redux'
import {ConnectedTasklist} from './Tasklist'

export const DashBoard=({groups})=>(
  <div>
  <h2>Dashboard</h2>  
  {groups.map(group=> (
    <ConnectedTasklist id={group.id} name={group.name}/>
  )    
  )}
  </div>
)

function mapStateToProps(state){
  return{
    groups:state.groups
  }
}

export const ConnectedDashBoard = connect(mapStateToProps)(DashBoard);