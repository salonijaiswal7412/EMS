import React from 'react'

function CreateTask() {
  return (
    <div>
      <div>
        <form action="" >
            <div className='flex justify-evenly mt-10 '>
            <div className='w-1/2'>
           <h3 className='my-2 text-xl font-semibold '>Task Title</h3>
            <input className='bg-zinc-700 rounded-md p-3 w-[45vw]' type="text" placeholder='Make a UI design'/>
            <h3 className='my-2 text-xl font-semibold'>Description</h3>
            <textarea className='bg-zinc-700 rounded-md p-3 w-[45vw]' placeholder='Give description' name="" id="" cols="20" rows="5"></textarea>
            
           </div>
            <div>
            
            <h3 className='my-2 text-xl font-semibold'>Date</h3>
            
            <input  className='bg-zinc-700 rounded-md p-3 w-[45vw]' type="date" />
            <h3 className='my-2 text-xl font-semibold'>Assign to</h3>
            <input className='bg-zinc-700 rounded-md p-3 w-[45vw]' type="text"  placeholder='Employee Name'/>
            <h3 className='my-2 text-xl font-semibold'>Category</h3>
            <input className='bg-zinc-700 rounded-md p-3 w-[45vw]' type="text"  placeholder='design,dev ,etc'/>
            <br></br>
            
            </div>
            </div>
            <button className='mx-[40vw] w-[10vw] bg-red-400 text-xl  rounded-lg font-semibold h-[3rem] mt-10'> Create Task</button>
           
            
        </form>
      </div>
    </div>
  )
}

export default CreateTask
