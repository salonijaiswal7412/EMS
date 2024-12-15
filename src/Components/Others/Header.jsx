import React from 'react'

const Header = ({data}) => {
  console.log(data);
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-lg'>Hello <br/> <span className='text-4xl font-bold'>{data.name}✋</span></h1>
      <button className='bg-red-600 text-white px-5 py-2 rounded-md text-lg font-medium'>Log Out</button>
    </div>
  )
}

export default Header
