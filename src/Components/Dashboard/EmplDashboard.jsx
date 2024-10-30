import React from 'react'
import Header from '../Others/Header'
import TaskListNum from '../Others/TaskListNum'
import TaskList from '../TaskList/TaskList'

function EmplDashboard() {
  return (
    <div className='p-12 h-screen'>
      <div className=''>
        <Header/>
        <TaskListNum/>
        <TaskList/>

      </div>

    </div>
  )
}

export default EmplDashboard
