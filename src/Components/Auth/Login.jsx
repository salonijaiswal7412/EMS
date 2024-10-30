import React, { useState } from 'react'

function Login() {
    const[email,setemail]=useState('');
    const[pass,setpass]=useState('');
    const submitHandler=(e)=>{
        e.preventDefault();
        console.log("submitted :",email,pass);

        setemail("");
        setpass("");

    }
  return (
    <div className='flex items-center justify-center h-screen w-screen'>
        <div className="border-4 border-blue-900 p-20 rounded-xl">
            <form onSubmit={(e)=>{
                submitHandler(e);

            }} action="" className='flex flex-col items-center justify-center'>
                <input value={email} onChange={(e)=>{
                    setemail(e.target.value);
                }} required className='border-[1px] border-blue-600 rounded-full px-6 py-3 text-xl outline-none bg-transparent m-3 placeholder:text-white' type="email" placeholder='Enter your email' />
                <input required value={pass} onChange={(e)=>{
                    setpass(e.target.value);
                }} className='border-[1px] border-blue-600 rounded-full px-6 py-3 text-xl outline-none bg-transparent m-3 placeholder:text-white'  type="password" placeholder='Enter password' />
                <button className='border-[1px] border-none bg-blue-900 rounded-full px-9 py-3 text-xl outline-none bg-transparent m-3' >Login</button>
            </form>
        </div>
      
    </div>
  )
}

export default Login
