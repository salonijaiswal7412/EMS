import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmplDashboard from './Components/Dashboard/EmplDashboard'
import AdmDashboard from './Components/Dashboard/AdmDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setuser] = useState(null);
  const authdata=useContext(AuthContext);
  

  const handleLogin=(email,password)=>{
    if(authdata && authdata.admin.find((e)=>e.email==email && password==e.password))
      setuser('admin');
    else if(authdata && authdata.employee.find((e)=>e.email==email && password==e.password))
      setuser("employee");
    else{
      alert("invalid");
    }

  }
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='admin' ?<AdmDashboard/>:<EmplDashboard/>}
    {/* <EmplDashboard /> */}
    {/* <AdmDashboard/> */}
    </>
  )
}

export default App
