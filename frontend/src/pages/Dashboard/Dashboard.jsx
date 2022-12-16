import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import { Route, Routes } from 'react-router-dom'
import DashHome from '../../components/DashHome'
import Sidebar from '../../components/Siderbar'
import Plans from '../Plans/Plans'

function Dashboard() {
  return (
    <Sidebar>
      <DashHome />

      {/* <Routes>
<Route path="/" element={<h2>Home Page</h2>} />
<Route path='/plans' element={<Plans />} />
      </Routes> */}

    </Sidebar>
  )
}

export default Dashboard

// <Routes>
// <Route path="/" element={<h2>Home Page</h2>} />
// <Route path='/dashbaord' element={<Dashboard />} />
// </Routes>