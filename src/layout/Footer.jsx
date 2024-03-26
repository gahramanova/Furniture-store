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
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';
import { ProductContext } from '../context/ProductContext';


const Footer = () => {
 const [mode] = useContext(ModeContext)
 const [productData] = useContext(ProductContext)
 const toggleLang =(lang)=> {
   i18n.changeLanguage(lang)
 }
 const {t} = useTranslation()
  return (
    <>
    <section className="section1 mx-5 my-5">
        <h4 className="fw-bold">{t("footer.0")}</h4>
        <p style={{ color: "#ccc" }}>
        {t("footer.1")}
        </p>

        <h4 className="fw-bold mt-4">{t("footer.2")}</h4>
        <p style={{ color: "#ccc" }}>{t("footer.3")}</p>
      </section>
  <footer>
  <div className="container-fluid">
    <div className="row">
      <div className='mb-4'><img className='logo' src={mode==="light"?logoLight:logoDark}></img></div>
      <div className="col-6 col-md-2 mb-3">
        <h5>{t("footer.4")}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to={"/about"} className="nav-link p-0">{t("footer.5")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/contact"} className="nav-link p-0">{t("footer.6")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/showrooms"} className="nav-link p-0">{t("footer.7")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/blog"} className="nav-link p-0">{t("footer.8")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/giftcards"} className="nav-link p-0">{t("footer.9")}</NavLink></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>{t("footer.10")}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to={"/products"} className="nav-link p-0 ">{t("footer.11")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/products"} className="nav-link p-0 ">{t("footer.12")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/products"} className="nav-link p-0 ">{t("footer.13")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/products"} className="nav-link p-0 ">{t("footer.14")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/products"} className="nav-link p-0 ">{t("footer.15")}</NavLink></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>{t("footer.16")}</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0">{t("footer.17")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0">{t("footer.18")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/"} className="nav-link p-0 ">{t("footer.19")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/faq"} className="nav-link p-0">{t("footer.20")}</NavLink></li>
          <li className="nav-item mb-2"><NavLink to={"/about"} className="nav-link p-0 ">{t("footer.21")}</NavLink></li>
        </ul>
      </div>
      <div className="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>{t("footer.22")}</h5>
          <div className="d-flex flex-column flex-sm-row w-100 gap-2">
          <ul className="list-unstyled d-flex">
            <li className=""><NavLink className="link-body-emphasis" href="#"><img src={facebook} style={{width: "24px", height:"24px"}}></img></NavLink></li>
            <li className="ms-3"><NavLink className="link-body-emphasis" href="#"><img src={twitter} style={{width: "24px", height:"24px"}}></img></NavLink></li>
            <li className="ms-3"><NavLink className="link-body-emphasis" href="#"><img src={pinterest} style={{width: "24px", height:"24px"}}></img></NavLink></li>
            <li className="ms-3"><NavLink className="link-body-emphasis" href="#"><img src={linkedin} style={{width: "24px", height:"24px"}}></img></NavLink></li>
        </ul>
          </div>
          <h5 className='text-bold'>{t("footer.23")}</h5>
          <img src={googlePlay}></img>
          <img className='mx-2' src={appStore}></img>
        </form>
      </div>
    </div>
    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>{t("footer.24")}</p>
    </div>
    </div>
  </footer>



    </>
  )
}

export default Footer