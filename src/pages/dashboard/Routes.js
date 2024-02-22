import React from 'react'
import { Route, Routes } from 'react-router-dom'

//Components
import Home from './Home'
import Products from './products'
import OrderList from './orders'

export default function HandleDashRoute() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/products/*' element={<Products />} />
            <Route path='/orders/*' element={<OrderList />} />
        </Routes>
    )
}
