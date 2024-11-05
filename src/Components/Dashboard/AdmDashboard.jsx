import React from 'react'
import Header from '../Others/Header'
import CreateTask from '../Others/CreateTask'
import AllTask from '../Others/AllTAsk'

function AdmDashboard() {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <CreateTask/>
      <AllTask/>
    </div>
  )
}

export default AdmDashboard
