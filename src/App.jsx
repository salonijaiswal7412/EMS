import React, { useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmplDashboard from './Components/Dashboard/EmplDashboard'
import AdmDashboard from './Components/Dashboard/AdmDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'

function App() {

  useEffect(()=>{
    // setLocalStorage()
    getLocalStorage();
  },)
  return (
    <>
    <Login/>
    {/* <EmplDashboard /> */}
    {/* <AdmDashboard/> */}
    </>
  )
}

export default App
