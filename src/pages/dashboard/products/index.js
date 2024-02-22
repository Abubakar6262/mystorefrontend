import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProdcut from './AddProdcut'
import ManageProdcut from './ManageProdcut'

export default function index() {
    return (
        <Routes>
            <Route path='/' element={<AddProdcut />} />
            <Route path='/manageproducts' element={<ManageProdcut />} />
        </Routes>
    )
}
