import React from 'react'
import { CiHeart } from "react-icons/ci";
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';

const SingleHomeProducts = ({img1,title,category, price,id,rating}) => {
    const [productData] = useContext(ProductContext)
    const toggleLang =(lang)=> {
    i18n.changeLanguage(lang)
  }
  const {t} = useTranslation()
  return (
    <>
    <div className="col col-mb-3 my-3">
        <div className="card card-home">
          <img src={img1} className="card-img-middle" alt="..." style={{objectFit: "contain", height: "300px"}}/>
          <div className="card-body">
            <div className='d-flex justify-content-between'>
            <p className="card-title fw-bold">{title}</p> 
            <p>{rating}<i class="fa-solid fa-star" style={{color: "#EABE12"}}></i></p> 
            </div>
            <p style={{color: "#ABA5A5"}} className="card-title">{category}</p>
            <p style={{color: "#F59A57"}} className='card-title fw-bold'>${price}</p>
            {/* <Link to={`/products/${slug(title)}`} className="card-text fw-bold btn btn-outline-secondary">
              View More
            </Link> */}
          
            <div className='cart d-flex justify-content-around'>
                <button onClick={()=>{localStorage.getItem("login")=== ("true")?addItem(alldata):navigate("/login")}} className="addtocart">
                {t("home-section-one.13")}
                </button>
                <button className='wishlist'><CiHeart style={{fontSize: "25px"}}/>
                </button>
            </div>
            
        </div>
      </div>
  </div>
    </>
  )
}

export default SingleHomeProducts