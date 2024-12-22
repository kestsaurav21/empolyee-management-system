import React from 'react'
import Header from '../Additionals/Header'
import CreateTask from '../Additionals/CreateTask'
import AllTaskList from '../Additionals/AllTaskList'

const AdminDashBoard = () => {
  return (
    <div className='p-10 h-screen w-full '>
        <Header />
        <CreateTask />
        <AllTaskList />
    </div>
  )
}

export default AdminDashBoard