import React from 'react'
import { Route, Routes } from 'react-router-dom'


//components
import Home from './Home'
import Header from './components/Header'
import Footer from './components/Footer'
import DetailPage from './DetailPage'
import AddToCart from './AddToCart'
export default function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail' element={<DetailPage/>} />
          <Route path='/addtocart' element={<AddToCart/>} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
