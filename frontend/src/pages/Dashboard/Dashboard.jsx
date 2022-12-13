import React from 'react'
import Actions from '../../components/Actions'
import Sidebar from '../../components/Siderbar'

function Dashboard() {
  return (
    <Sidebar>
      <Actions />
    </Sidebar>
  )
}

export default Dashboard

// <Routes>
// <Route path="/" element={<h2>Home Page</h2>} />
// <Route path='/dashbaord' element={<Dashboard />} />
// </Routes>