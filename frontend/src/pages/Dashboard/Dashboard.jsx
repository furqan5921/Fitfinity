import { HStack } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashHome from '../../components/DashHome'
import { SidebarContent } from '../../components/SidebarContent'
import Sidebar from '../../components/Siderbar'
import Plans from '../Plans/Plans'

function Dashboard() {
  return (
    <>
      <SidebarContent display={{base:"none",md:"block"}}/>
      <DashHome />

    </>
  )
}

export default Dashboard

// <Routes>
// <Route path="/" element={<h2>Home Page</h2>} />
// <Route path='/dashbaord' element={<Dashboard />} />
// </Routes>