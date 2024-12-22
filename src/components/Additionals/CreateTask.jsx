import React, { useState } from 'react'

const CreateTask = () => {
    const [formData, setFormData] = useState({
        taskName: '',
        date: '',
        assignedTo: '',
        priority: '',
        description: ''
    })

  return (
    <div className='flex flex-col gap-5 items-center justify-center w-full bg-slate-700 p-5 mt-10'>
        <h1 className='text-2xl font-bold '>Create Task</h1>

        <form className='flex justify-evenly gap-5 mt-2 w-full'>
            <div className='flex flex-col gap-2 w-[300px] mt-2'>
              <label htmlFor="task-name" className='text-md font-semibold'>Task Name</label>
              <input type="text" id="task-name" className='border-2 border-gray-400 rounded-lg p-2 text-black' placeholder='Task Name' />
              <label htmlFor="date" className='text-md font-semibold'>Date</label>
              <input type="date" id="date" className='border-2 border-gray-400 rounded-lg p-2  text-black' placeholder='dd/mm/yyyy' />
              <label htmlFor="assigned-to" className='text-md font-semibold' placeholder='Empolyee Name'>Assigned To</label>
              <input type="text" id='assigned-to' className='border-2 border-gray-400 rounded-lg p-2  text-black' placeholder='Empolyee Name' />
              <label htmlFor="priority" className='text-md font-semibold'>Priority</label>
              <select id="priority" className='border-2 border-gray-400 rounded-lg p-2  text-black' >
                  <option value="High">High</option>
                  <option value="Low">Low</option>
              </select>
            </div>

            <div className='flex flex-col gap-2 w-[300px] mt-2 '>
                <label htmlFor="description" className='text-md font-semibold'>Description</label>
                <textarea id="description" className='border-2 border-gray-400 rounded-lg p-2 text-black w-full h-[230px] '></textarea>
                <button className='bg-violet-500 w-full text-white p-2 rounded-lg mt-3'>Create Task</button>
            </div>
        </form>
           
        </div>
  )
}

export default CreateTask