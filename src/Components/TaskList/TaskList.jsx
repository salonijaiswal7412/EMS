import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className='h-[41vh] mt-10 py-5 w-full flex items-center gap-5 flex-nowrap overflow-x-auto'>
        <div className="flex-shrink-0 h-full w-[300px] bg-red-400 rounded-xl">
            <div>
                <h3 className='bg-red-600 text-white w-10'>High</h3>
            </div>
        </div>
        
        
    </div>
  )
}

export default TaskList
