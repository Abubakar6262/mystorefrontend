import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'

//components
import Frontend from './frontend'
import Dashboard from './dashboard'
import Auth from './auth'
import PrivatePath from './PrivatePath'
import { useAuthContext } from '../contexts/AuthContext'
function HandlePath() {
  const { curUserToken } = useAuthContext()
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' element={<Frontend />} />
        <Route path='/dashboard/*' element={< PrivatePath Component={Dashboard} />} />
        <Route path='/auth/*' element={curUserToken === null ? <Auth /> : <Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default HandlePath