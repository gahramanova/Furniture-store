import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import useFontFaceObserver from 'use-font-face-observer';
import { FaRegUserCircle } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";



const Header = () => {
  // const isFontListLoaded = useFontFaceObserver([
  //   {
  //     family: `Quicksand`
  //   },
  // ]);
  return (
    <>
     <div className='section section1'>
     <nav className="navbar navbar-expand-lg bg-body-tertiary p-0 m-0 body">
        <div className="container navbar">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-lg-0">
            <li  className="nav-item">
                <NavLink to={"/"} className="nav-link" >Gift-Cards</NavLink>
              </li>
              <li  className="nav-item">
                <NavLink to={"/"} className="nav-link " aria-current="page" href="#">Showroom</NavLink>
              </li>
              <li  className="nav-item">
                <NavLink to={"/about"} className="nav-link" href="#">About us</NavLink>
              </li>
              
            </ul>
            <ul className="navbar-nav mb-lg-0">
            <li  className="nav-item">
                <NavLink to={"/"} className="nav-link" style={{borderRight: "1px solid #a2a2a2"}}><FaPhoneAlt className='mx-1'/>(+604 994 56 78)</NavLink>
              </li>
              <li  className="nav-item">
                <NavLink to={"/"} className="nav-link mx-3" aria-current="page" href="#"><FaRegUserCircle className='mx-1'/><FaRegUserCircle className='mx-1'/><FaRegUserCircle className='mx-1'/>
                Contact with an expert</NavLink>
              </li>
             
              
            </ul>
          </div>
        </div>
      </nav>
     </div>
      <div className='section section2'>
      <div className="container container-header pb-0 mb-0">
              <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4">
                <div className="col-lg-3 mb-2 mb-md-0">
                  <img src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-logo-black.svg"></img>
                </div>

                <div className="nav col-12 col-lg-4 mb-2 justify-content-center mb-md-0">
                  <div className="input-group mb-3 flex-grow-1">
                  <input type="text" className="form-control" placeholder="Search for products" data-bs-toggle="modal" data-bs-target="#exampleModal" />
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                </div>
                </div>
                <div className="col-lg-5 text-end">
                <button type="button" style={{backgroundColor: "#EFEEEB"}} className="btn position-relative mx-2">
                <IoCartOutline />
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                  0
                </span>
              </button>

              <Link className='btn' style={{backgroundColor: "#EFEEEB"}}><i class="fa-regular fa-heart"></i></Link>
              <Link to={"/login"} className='btn mx-2' style={{backgroundColor: "#EFEEEB"}}><i class="fa-regular fa-user mx-2"></i>Login</Link>
              <Link to={"/register"} className="btn" style={{backgroundColor: "#EFEEEB"}}><i class="fa-regular fa-user mx-2"></i>Sign up</Link>
                
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

              </header>
          <div className='container container-header mx-0 p-0'>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                  <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                    <li><NavLink to={"/"} className="nav-link px-2 link-body-emphasis">Home</NavLink></li>
                    <li><NavLink to={"/about"} className="nav-link px-2 link-body-emphasis">About Us</NavLink></li>
                    <li><NavLink to={"/categories"} className="nav-link px-2 link-body-emphasis">Categories</NavLink></li>
                    <li><NavLink to={"/shop"} className="nav-link px-2 link-body-emphasis">Shop</NavLink></li>
                    <li><NavLink to={"/blog"} className="nav-link px-2 link-body-emphasis">Blog</NavLink></li>
                    <li><NavLink to={"/showrooms"} className="nav-link px-2 link-body-emphasis">Showrooms</NavLink></li>
                    <li><NavLink to={"/contact"} className="nav-link px-2 link-body-emphasis">Contact</NavLink></li>

                  </ul>
                
                  <div className="dropdown text-end">
                  <p>Free shipping for all order $1.300</p>
                  </div>
                </div>
          </div>
            </div>
      </div>
    
  



    </>
  )
}

export default Header