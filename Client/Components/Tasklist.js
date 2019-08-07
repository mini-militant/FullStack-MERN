import React from 'react'
import {connect} from 'react-redux'

export const TaskList=({tasks,name})=>(
  <div>
    
    <h3>{name}</h3>
    {tasks.map(task=>
    <div>
    {task.name}
    </div>)}
  </div>
)
//how do we know what tasks to include? so this function

const mapStateToProps=(state,ownProps)=>{
  let groupID=ownProps.id;
  return{
    name:ownProps.name,
    id:ownProps.id,
    tasks:state.tasks.filter(task=>task.group===groupID)
  }  
}

export const ConnectedTasklist = connect (mapStateToProps)(TaskList)