import React from 'react'
import Header from '../Additionals/Header'
import StatsCard from '../Additionals/StatsCard'
import TaskList from '../TaskList/TaskList'

const EmpolyeeDashboard = () => {
  return (
    <div className='flex flex-col h-screen w-screen p-10'>

        <Header />

        <h1 className='text-center text-xl sm:text-4xl my-4'>Empolyee Dashboard</h1>

        <StatsCard />

        <TaskList />

    </div>
     

    
  )
}

export default EmpolyeeDashboard