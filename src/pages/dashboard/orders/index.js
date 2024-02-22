import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OrderDetails from './OrderDetails'
import OrderList from './OrderList'

function Index() {
  return (
    <Routes>
            <Route path='/' element={<OrderList />} />
            <Route path='/oderdetails' element={<OrderDetails />} />
        </Routes>
  )
}

export default Index