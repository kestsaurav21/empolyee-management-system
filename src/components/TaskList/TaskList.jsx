import React from 'react'

const TaskList = () => {
  return (
    <div id='task-list'
     className='h-[55%] w-full py-5 p-10 mt-10 rounded-xl flex items-center justofy-start gap-5 flex-nowrap overflow-x-auto'>
        <div className='h-full w-[300px] bg-red-400 rounded-xl shrink-0 p-5 '>
            <div className='flex justify-between items-center   rounded-full mb-4'>
                <h2 className=' bg-red-600 p-2 '>High</h2>
                <h4 className='text-md font-semibold'>10-feb-2023</h4>
            </div>
            <h3 className='text-2xl font-bold mb-5'>Make Youtube Video</h3>
            <span className='text-justify font-semibold text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae veritatis omnis, tenetur minima autem perspiciatis ex voluptatum repellat sequi.</span>
        </div>

        <div className='h-full w-[300px] bg-yellow-400 rounded-xl shrink-0 p-5 '>
            <div className='flex justify-between items-center   rounded-full mb-4'>
                <h2 className=' bg-red-600 p-2 '>High</h2>
                <h4 className='text-md font-semibold'>10-feb-2023</h4>
            </div>
            <h3 className='text-2xl font-bold mb-5'>Make Youtube Video</h3>
            <span className='text-justify font-semibold text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae veritatis omnis, tenetur minima autem perspiciatis ex voluptatum repellat sequi.</span>
        </div>

        <div className='h-full w-[300px] bg-blue-400 rounded-xl shrink-0 p-5 '>
            <div className='flex justify-between items-center  rounded-full mb-4'>
                <h2 className=' bg-red-600 p-2 '>High</h2>
                <h4 className='text-md font-semibold'>10-feb-2023</h4>
            </div>
            <h3 className='text-2xl font-bold mb-5'>Make Youtube Video</h3>
            <span className='text-justify font-semibold text-md'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quae veritatis omnis, tenetur minima autem perspiciatis ex voluptatum repellat sequi.</span>
        </div>

        


        
       
    </div>
  )
}

export default TaskList