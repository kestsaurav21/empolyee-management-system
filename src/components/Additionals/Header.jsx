import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-end'>
        <div className='flex gap-10 items-center'>
            <h1 className='text-lg font-semibold sm:text-2xl '>Hi! Saurabh 👋</h1>
            <button className='bg-red-600 text-white rounded-lg p-2 font-semibold cursor-pointer hover:scale-105 transition-all duration-700  '>Logout</button>
        </div>

        

    </div>
  )
}

export default Header