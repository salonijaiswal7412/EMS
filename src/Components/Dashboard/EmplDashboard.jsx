import React from 'react'
import Header from '../Others/Header'
import TaskListNum from '../Others/TaskListNum'
import TaskList from '../TaskList/TaskList'

function EmplDashboard({data}) {
  
  return (
    <div className='p-12 h-screen'>
      <div className=''>
        <Header data={data}/>
        <TaskListNum data={data}/>
        <TaskList data={data}/>

      </div>

    </div>
  )
}

export default EmplDashboard
