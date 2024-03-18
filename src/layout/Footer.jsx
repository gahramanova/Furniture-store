import React, { useContext, useState } from 'react'
import facebook from "../assets/img/facebook.png"
import pinterest from "../assets/img/pinterest.png"
import linkedin from "../assets/img/pinterest.png"
import twitter from "../assets/img/twitter.png"
import logoLight from "../assets/img/logo-light.svg"
import logoDark from "../assets/img/logo-black.svg"
import { NavLink } from 'react-router-dom'
import { ModeContext } from '../context/ModeContext'
import googlePlay from "../assets/img/google-play.svg"
import appStore from "../assets/img/app-store.svg"

const Footer = () => {
 const [mode] = useContext(ModeContext)
  return (
    <>
    <section className="section1 mx-5 my-5">
        <h4 className="fw-bold">Online store with a wide selection of furniture and decor</h4>
        <p style={{ color: "#ccc" }}>
          Furniture is an invariable attribute of any room. It is they who give it the right atmosphere, making the space cozy and comfortable, creating favorable conditions for p
          roductive work or helping to relax after a hard day. More and more often, customers want to place an order in an online store, when you can sit down at the computer in your free time, arrange the furniture in the photo and calmly
          buy the furniture you like. The online store has a large catalog of furniture: both home and office furniture are available
        </p>

        <h4 className="fw-bold mt-4">Furniture production is a modern form of art</h4>
        <p style={{ color: "#ccc" }}>Furniture manufacturers, as well as manufacturers of other home goods, are full of amazing offers: we often come across both standard mass-produced products and unique creations – 
        furniture from professional craftsmen, which will be appreciated by true connoisseurs of beauty. We have selected for you the best models from modern craftsmen who managed to ingeniously combine elegance, 
        quality and practicality in each product unit. Our assortment includes products from proven companies. Who for many years of continuous joint work did not give reason to doubt their reliability and honesty. All of them guarantee the high quality of their products, excellent operational characteristics, attractive appearance of the products, a long period of use of the furniture, as well as safety.</p>
      </section>
  <footer>
  <div className="container-fluid">
    <div className="row">
      <div className='mb-4'><img className='logo' src={mode==="light"?logoLight:logoDark}></img></div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Useful links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to={"/about"} className="nav-link p-0">About us</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/contact"} className="nav-link p-0">Contact</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/showrooms"} className="nav-link p-0">Showrooms</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/blog"} className="nav-link p-0">Blog</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/giftcards"} className="nav-link p-0">Gift Cards</NavLink></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Categories</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 ">Chair</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 ">Tables</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 ">Sofas</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 ">Armchairs</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 ">Beds</NavLink></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Other links</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0">Home</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0">Features</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0 ">Pricing</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/faq"} className="nav-link p-0">FAQs</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/about"} className="nav-link p-0 ">About</NavLink></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe us</h5>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
          <ul className="list-unstyled d-flex">
            <li className=""><NavLink className="link-body-emphasis" href="#"><img src={facebook} style={{width: "24px", height:"24px"}}></img></NavLink></li>
            <li className="ms-3"><NavLink className="link-body-emphasis" href="#"><img src={twitter} style={{width: "24px", height:"24px"}}></img></NavLink></li>
            <li className="ms-3"><NavLink className="link-body-emphasis" href="#"><img src={pinterest} style={{width: "24px", height:"24px"}}></img></NavLink></li>
            <li className="ms-3"><NavLink className="link-body-emphasis" href="#"><img src={linkedin} style={{width: "24px", height:"24px"}}></img></NavLink></li>
        </ul>
          </div>
          <h5 className='text-bold'>Download App on Mobile.</h5>
          <img src={googlePlay}></img>
          <img className='mx-2' src={appStore}></img>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2024 Company, Inc. All rights reserved.</p>
    </div>
    </div>
  </footer>



    </>
  )
}

export default Footer