import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Register from './Register'

export default function Index() {
    return (
        <Routes>
            <Route path='/' element={<Register />} />
            <Route path='/login' element={<Login />} />
        </Routes>
    )
}
