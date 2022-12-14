
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard/Dashboard'

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<h2>Home Page</h2>} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  )
}


export default Allroutes;
