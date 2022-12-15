import React from 'react'
// import { Route, Routes } from 'react-router-dom'
import DashHome from '../../components/DashHome'
import Sidebar from '../../components/Siderbar'

function Dashboard() {
  return (
    <Sidebar>
      <DashHome />
    </Sidebar>
  )
}

export default Dashboard

// <Routes>
// <Route path="/" element={<h2>Home Page</h2>} />
// <Route path='/dashbaord' element={<Dashboard />} />
// </Routes>