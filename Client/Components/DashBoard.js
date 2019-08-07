import React from 'react'
import {connect} from 'react-redux'

export const DashBoard=({groups})=>(
  <div>
  <h2>Dashboard</h2>  
  {groups.map(group=> (
    <div>
          {group.name} 
     </div> 
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