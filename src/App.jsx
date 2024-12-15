import React, { useContext, useEffect, useState } from 'react'
import Login from './Components/Auth/Login'
import EmplDashboard from './Components/Dashboard/EmplDashboard'
import AdmDashboard from './Components/Dashboard/AdmDashboard'
import { getLocalStorage, setLocalStorage } from './Utils/localStorage'
import { AuthContext } from './Context/AuthProvider'

function App() {

  const [user, setuser] = useState(null);
  const [loggedInUserData,setLoggedInUserData]=useState(null);
  const authdata=useContext(AuthContext);
  
  // useEffect(()=>{
  //   if(authdata){
  //     const loggedInUser=localStorage.getItem("LoggedInUser")
  //     if(loggedInUser){
  //       setuser(loggedInUser.role);
  //     }
  //   }

  // },[authdata]);

  const handleLogin=(email,password)=>{
    if(authdata && authdata.admin.find((e)=>e.email==email && password==e.password))
    {
      setuser('admin');
      localStorage.setItem("loggedInUser",JSON.stringify({role:'admin'}))
    }
    else if(authdata )
    {
      const employee=authdata.employee.find((e)=>e.email==email && password==e.password)
      if(employee){

      setuser("employee");
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser",JSON.stringify({role:'employee'}))
      }
    }
    else{
      alert("invalid");
    }

  }
  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user=='admin' ?<AdmDashboard/>:(user=='employee'?<EmplDashboard data={loggedInUserData}/>:null)}
    {/* <EmplDashboard /> */}
    {/* <AdmDashboard/> */}
    </>
  )
}

export default App
