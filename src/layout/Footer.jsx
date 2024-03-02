import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <>
     <section className='section section5'>
      <nav className="navbar">
        <div className="container">
          <img src="https://woodmart.b-cdn.net/furniture2/wp-content/uploads/sites/11/2023/04/wd-furniture-logo-white.svg"></img>
          <div className="d-flex col-12 col-lg-4" role="search">
            <h4>Subscribe us: 
            <i class="fa-brands fa-facebook mx-2"></i>
            <i class="fa-brands fa-x-twitter mx-2"></i>
            <i class="fa-brands fa-pinterest mx-2"></i>
            <i class="fa-brands fa-linkedin mx-2"></i>
            </h4>
            
          </div>
        </div>
      </nav>
     <div className="container container-footer">
        <footer className="py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5>Useful Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2" ><NavLink to={"/"} className="nav-link p-0 text-body-secondary">About us</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/contact"} className="nav-link p-0 text-body-secondary">Contact us</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/showrooms"} className="nav-link p-0 text-body-secondary">Showrooms</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/blog"} className="nav-link p-0 text-body-secondary">Blog</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/giftcards"} className="nav-link p-0 text-body-secondary">Gift Cards</NavLink></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Categories</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 text-body-secondary">Chair</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 text-body-secondary">Tables</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 text-body-secondary">Sofas</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 text-body-secondary">Armchairs</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/categories"} className="nav-link p-0 text-body-secondary">Beds</NavLink></li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5>Other Links</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0 text-body-secondary">Storage</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0 text-body-secondary">Textiles</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0 text-body-secondary">Toys</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0 text-body-secondary">Lighting</NavLink></li>
                <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0 text-body-secondary">Decor</NavLink></li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3">
              <div>
                <h5>Download App on Mobile:</h5>
                <p>15% discount on your first purchase</p>
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <img src="https://w7.pngwing.com/pngs/696/500/png-transparent-google-play-mobile-phones-google-search-google-text-logo-sign.png"></img>
                  <img src="https://w7.pngwing.com/pngs/1015/380/png-transparent-app-store-logo-iphone-app-store-google-play-apple-app-store-electronics-text-logo.png"></img>

                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p>©  2024 Created by Narmin. Luxury Furniture Store..</p>

          </div>
        </footer>
      </div>

     </section>
    </>
  )
}

export default Footer