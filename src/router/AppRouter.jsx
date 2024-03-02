import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Shop from "../pages/Shop"
import Contact from "../pages/Contact"
import Categories from "../pages/Categories"
import Blog from "../pages/Blog"
import Header from '../layout/Header'
import Footer from "../layout/Footer"
import Login from '../pages/Login'
import Register from '../pages/Register'
import GiftCards from '../pages/GiftCards'
import Showrooms from '../pages/Showrooms'

const AppRouter = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/categories' element={<Categories/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/giftcards' element={<GiftCards/>}></Route>
      <Route path='/showrooms' element={<Showrooms/>}></Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default AppRouter