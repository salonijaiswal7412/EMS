import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../Utils/localStorage';

export const AuthContext=createContext()

function AuthProvider({children}) {
    const [userData, setuserData] = useState(null);

   useEffect(()=>{
    setLocalStorage()
    const {employee,admin}=getLocalStorage();
   setuserData({employee,admin});
   },[]);
  return (
    <div>
        <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
      
    </div>
  )
}

export default AuthProvider
