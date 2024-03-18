import React, { useContext, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useCart } from 'react-use-cart';
import { ModeContext } from '../context/ModeContext';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";
import logoLight from "../assets/img/logo-light.svg"
import logoDark from "../assets/img/logo-black.svg"
import expert from "../assets/img/contact-expert.png"



const Header = () => {
  const { totalItems } = useCart();
  const navigate = useNavigate()
  const [mode, setMode] = useContext(ModeContext);
  console.log(mode)
 
  return (
    <>
      <header>
        <div className='container-fluid p-0'>
          <div className="navbar navbar-expand-lg bg-body-tertiary p-0 m-0 body gift">
            <div className="container navbar p-1">
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-lg-0">
                 
                  <li className="nav-item">
                    <NavLink to={"/"} className="nav-link text-secondary" >Gift-Cards</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/showrooms"} className="nav-link text-secondary" aria-current="page" href="#">Showroom</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/about"} className="nav-link text-secondary" href="#">About us</NavLink>
                  </li>

                </ul>
                <ul className="navbar-nav mb-lg-0">
                  <li className="nav-item">
                    <NavLink to={"/"} className="nav-link text-secondary" style={{ borderRight: "1px solid #a2a2a2" }}><FaPhoneAlt className='mx-1' />(+604 994 56 78)</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/contact"} className="nav-link mx-3 " aria-current="page" href="#"><img src={expert}></img>
                      Contact with an expert</NavLink>
                  </li>


                </ul>
              </div>
            </div>
          </div>

          <div className="container-fluid woodmart">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
              <div className="col-lg-2 mb-3 mb-md-0">
              <img className='logo' src={mode==="light"?logoDark:logoLight}></img>
              </div>

              <div className="nav col-12 col-lg-6 mb-2 justify-content-center mb-md-0">
                <div className="input-group mb-3 flex-grow-2 mt-3 media">
                  <input type="text" className="form-control p-2" placeholder="Search for products" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                </div>
              </div>
              <div className="col-lg-4 text-end">
              <button className='btn position-relative media' onClick={()=>{
                    mode === "light"?setMode("dark"):setMode("light")
                    mode === "light"?localStorage.setItem("mode","dark"):localStorage.setItem("mode","light")
                  }}>
                    {mode==="light" ? <MdOutlineLightMode />: <MdOutlineDarkMode />
}
                  </button>
                
                  <button className='btn position-relative mx-2 media'>En</button>

                  {/* {mode==="light" ? <img src={englandFlag} style={{width: "24px", height:"24px"}}></img>: <img src={azerbaijanFlag} style={{width: "24px", height:"24px"}}></img>} */}
                <Link to={"/cart"} type="button" style={{ backgroundColor: "#EFEEEB" }} className="btn position-relative mx-2 cart"
                  onClick={localStorage.getItem("login") === "true" ? "/cart" : ("/login")}
                >
                  <IoCartOutline />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                    {localStorage.getItem("login") === "true" ? totalItems : 0}
                  </span>
                </Link>

                <Link to={"/wishlist"} className='btn media' style={{ backgroundColor: "#EFEEEB" }}><i class="fa-regular fa-heart"></i></Link>

                {localStorage.getItem("login") === "true" ?
                  <NavLink className="media" style={{ textDecoration: "none", color: "black" }} to={"/myprofile"}><i class="fa-solid fa-user mx-2"></i>Hi, {localStorage.getItem("firstname")}

                  </NavLink>
                  :
                  <span className='mx-2'>
                    <Link to={"/login"} className='btn mx-2 my-2' style={{ backgroundColor: "#EFEEEB" }}><i class="fa-regular fa-user mx-2"></i>Login</Link>
                    <Link to={"/register"} className="btn" style={{ backgroundColor: "#EFEEEB" }}><i class="fa-regular fa-user mx-2"></i>Sign up</Link>
                  </span>
                }

              </div>
              <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                      <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                    </div>
                    <div className="modal-body">
                      ...
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                      <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <nav className="navbar navbar-expand-lg p-0 home" >
              <div className="container-fluid p-0">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><NavLink to={"/"} className="nav-link px-2 link-body-emphasis">Home</NavLink></li>
                    <li><NavLink to={"/about"} className="nav-link px-2 link-body-emphasis">About Us</NavLink></li>
                    <li><NavLink to={"/blog"} className="nav-link px-2 link-body-emphasis">Blog</NavLink></li>
                    <li><NavLink to={"/products"} className="nav-link px-2 link-body-emphasis">Products</NavLink></li>
                    <li><NavLink to={"/showrooms"} className="nav-link px-2 link-body-emphasis">Showrooms</NavLink></li>
                    <li><NavLink to={"/contact"} className="nav-link px-2 link-body-emphasis">Contact</NavLink></li>

                  </ul>
                  <div className="paragraf">
                  <p className='shipping'>Free shipping for all order $1.300</p>
                
                  </div>
                </div>
              </div>
            </nav>
          </div>

        </div>
      </header>
      
    </>

  )
}

export default Header