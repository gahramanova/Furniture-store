import React, { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from "../pages/Home"
import About from "../pages/About"
import Contact from "../pages/Contact"
import Blog from "../pages/Blog"
import Header from '../layout/Header'
import Footer from "../layout/Footer"
import Login from '../pages/Login'
import Register from '../pages/Register'
import GiftCards from '../pages/GiftCards'
import Cart from "../pages/Cart"
import ProductDetails from "../pages/ProductDetails"
import Products from "../pages/Products"
import Forgotpassword from '../pages/Forgotpassword'
import Myprofile from "../pages/Myprofile"
import { ModeContext } from '../context/ModeContext'
import FAQ from '../pages/FAQ'
import Wishlist from '../pages/Wishlist'
import Showrooms from '../pages/Showrooms'

const AppRouter = () => {
  const [mode] = useContext(ModeContext)
  return (
    <>
    <BrowserRouter>
      <div className={mode}>
      <Header/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/blog' element={<Blog/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/shop' element={<Showrooms/>}></Route>
      <Route path='/giftcards' element={<GiftCards/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
      <Route path="/products/:url" element={<ProductDetails/>}/>
      <Route path='/forgotpassword' element={<Forgotpassword/>}></Route>
      <Route path="/myprofile" element={<Myprofile/>}/>
      <Route path="/faq" element={<FAQ/>}/>
      
    </Routes>
    <Footer/>
      </div>
    </BrowserRouter>
    </>
  )
}

export default AppRouter