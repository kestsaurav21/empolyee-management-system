import React from 'react'

const StatsCard = () => {
  return (
    <div className='flex mt-5 justify-between screen gap-5 '>
        <div className='flex flex-col items-start w-[45%] bg-red-400 rounded-xl p-4 sm:p-10 '>
            <h2 className='text-md font-semibold sm:text-xl bg-transparent'>0</h2>
            <h3 className='text-md font-bold sm:text-2xl bg-transparent'>Failed Task</h3>
        </div>
        <div className='flex flex-col items-start w-[45%] bg-green-400 rounded-xl p-4 sm:p-10 '>
            <h2 className='text-md font-semibold sm:text-xl bg-transparent'>0</h2>
            <h3 className='text-md font-bold sm:text-2xl bg-transparent'>Accept Task</h3>
        </div>
        <div className='flex flex-col items-start w-[45%] bg-blue-400 rounded-xl p-4 sm:p-10 '>
            <h2 className='text-md font-semibold sm:text-xl bg-transparent'>0</h2>
            <h3 className='text-md font-bold sm:text-2xl bg-transparent'>New Task</h3>
        </div>
        <div className='flex flex-col items-start w-[45%] bg-yellow-400 rounded-xl p-4 sm:p-10 '>
            <h2 className='text-md font-semibold sm:text-xl bg-transparent'>0</h2>
            <h3 className='text-md font-bold sm:text-2xl bg-transparent'>Complete Task</h3>
        </div>
    </div>
  )
}

export default StatsCard