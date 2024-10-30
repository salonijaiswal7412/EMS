import React from 'react'

function TaskListNum() {
  return (
    <div className='flex gap-5'>
        <div className=" w-[35vw] bg-red-400 flex flex-col p-10 justify-center rounded-lg mt-10">
        <h2 className='bg-transparent text-6xl'>0</h2>
        <h3 className='bg-transparent text-3xl'>new task</h3>
            
        </div>
        <div className=" w-[35vw] bg-blue-400 flex flex-col p-10 justify-center rounded-lg mt-10">
        <h2 className='bg-transparent text-6xl'>0</h2>
        <h3 className='bg-transparent text-3xl'>new task</h3>
            
        </div>
        <div className=" w-[35vw] bg-green-400 flex flex-col p-10 justify-center rounded-lg mt-10">
        <h2 className='bg-transparent text-6xl'>0</h2>
        <h3 className='bg-transparent text-3xl'>new task</h3>
            
        </div>
        <div className=" w-[35vw] bg-yellow-400 flex flex-col p-10 justify-center rounded-lg mt-10">
        <h2 className='bg-transparent text-6xl'>0</h2>
        <h3 className='bg-transparent text-3xl'>new task</h3>
            
        </div>
        
    </div>
  )
}

export default TaskListNum
