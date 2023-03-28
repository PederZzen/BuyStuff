import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout'
import './main.scss'
import CheckoutSuccess from './pages/checkoutSuccess'
import Contact from './pages/contact'
import Home from './pages/home'
import Product from './pages/product'

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="success" element={<CheckoutSuccess />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="product/:id" element={<Product />}></Route>
      </Routes>
    </Layout>
  )
}

export default App
