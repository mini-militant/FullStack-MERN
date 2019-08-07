import React from 'react'
import {connect} from 'react-redux'

export const TaskList=({tasks})=>(
  <div>
    
    {console.log(tasks)}
    {tasks.map(task=>
    <div>
    {task.name}
    </div>)}
  </div>
)

function mapStateToProps(state){
  return{
    tasks:state.tasks
  }  
}

export const ConnectedTasklist = connect (mapStateToProps)(TaskList)