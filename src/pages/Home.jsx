import React from "react";
import Slider from 'react-slick';
import sliderOne from "../assets/img/furniture-slider1.jpg"
import sliderTwo from "../assets/img/furniture-slider2.jpg"
import sliderThree from "../assets/img/furniture-slider3.jpg"
import decor from "../assets/img/category-decor.webp"
import armchair from "../assets/img/category-armchair.webp"
import beds from "../assets/img/category-beds.webp"
import chairs from "../assets/img/category-chairs.webp"
import lighting from "../assets/img/category-lighting.webp"
import sofas from "../assets/img/category-sofas.webp"
import storage from "../assets/img/category-storage.webp"
import textiles from "../assets/img/category-textiles.webp"
import toys from "../assets/img/category-toys.webp"
import tables from "../assets/img/category-tables.webp"
import slider1 from "../assets/img/slider1.png"
import slider2 from "../assets/img/slider2.png"
import slider3 from "../assets/img/slider3.png"
import { NavLink } from "react-router-dom";
import SingleHomeProducts from "../components/SingleHomeProducts";
import { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import cardLogoOne from "../assets/img/cardLogoOne.png"
import cardLogoTwo from "../assets/img/cardLogoTwo.png"
import cardLogoThree from "../assets/img/cardLogoThree.png"
import cardLogoFour from "../assets/img/cardLogoFour.png"
import cardLogoFive from "../assets/img/cardLogoFive.png"
import ellitis from "../assets/img/ellitis.jpg"
import hay from "../assets/img/hay.jpg"
import kettal from "../assets/img/kettal.jpg"
import lladro from "../assets/img/lladro.jpg"
import poliform from "../assets/img/poliform.jpg"
import lazy from "../assets/img/lazy.webp"
import furniture from "../assets/img/furniture-choosing-rules.webp"
import videoPhoto from "../assets/img/video-photo.jpg"
import i18n from '../i18n/i18next';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    // style: { width: "100%", overflow: "hidden"},
    // prevArrow: <div className="slick-prev">Previous</div>,
    // nextArrow: <div className="slick-next">Next</div>
  };

  const [productData] = useContext(ProductContext)
  const toggleLang =(lang)=> {
    i18n.changeLanguage(lang)
  }
  const {t} = useTranslation()
  return (
    <>
      <section className="section1">
        <Slider {...settings}>
          <div className="slider">
            <img src={sliderOne} style={{ objectFit: "contain", height: "100%" }} />
            <div className="content">
              <div className="first d-flex align-items-center">
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider1} />
                <h5 style={{ color: "#414240" }}> {t("home-slider.0")}<br /></h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>{t("home-slider.1")}</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold"> {t("home-slider.2")}</button>

              </div>
            </div>
          </div>
          <div className="slider">
            <img src={sliderTwo} style={{ objectFit: "contain", height: "100%" }} />
            <div className="content">
              <div className="first d-flex align-items-center">
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider2} />
                <h5 style={{ color: "#414240" }}>{t("home-slider.3")}</h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>{t("home-slider.4")}</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold"> {t("home-slider.2")}</button>

              </div>
            </div>
          </div>
          <div className="slider">
            <img src={sliderThree} style={{ objectFit: "contain", height: "100%" }} />
            <div className="content">
              <div className="first d-flex align-items-center">
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider3} />
                <h5 style={{ color: "#414240" }}>{t("home-slider.5")}</h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>{t("home-slider.6")}</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold"> {t("home-slider.2")}</button>

              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Our Categories ==================================================================================================*/}
      <section className="my-5 mx-5 home-section">
        <h2 className="fw-bold">{t("home-section-one.0")}</h2>
        <p>{t("home-section-one.1")}</p>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-5 g-4">
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={chairs} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.2")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={tables} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.3")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={sofas} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.4")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={armchair} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.5")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={beds} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.6")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={storage} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.7")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={textiles} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.8")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={lighting} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.9")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={toys} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.10")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/products"}>
                <div className="card card-home">
                  <img src={decor} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{t("home-section-one.11")}</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 mx-5 section2">
        <h2 className="fw-bold">{t("home-section-one.12")}</h2>
        <div className='container my-5'>
          <div className='row row-cols-2 row-cols-md-5 g-4'>
            {productData.slice(0, 10).map(item => (
              <SingleHomeProducts
                id={item.id}
                title={item.title}
                img1={item.img[0]}
                price={item.price}
                category={item.category}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section3 my-5 mx-5">
        <h2 className="fw-bold">{t("home-section-one.14")}</h2>
        <div className="container my-5">
          <div className="row row-cols-1 row-cols-md-5 g-4">
            <div className="col col-mb-3">
              <NavLink to={"/shop"}>
                <div className="card">
                  <img src={ellitis} className="card-img-bottom" alt="..." />
                  <div className="card-body ">
                    <div><img src={cardLogoOne} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                    <div className="mx-2">
                      <h5 className="card-title-one">Ellitis</h5>
                      <p className="text-paragraf">Talosa / France</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col col-mb-3">
              <NavLink to={"/shop"}>
                <div className="card">
                  <img src={hay} className="card-img-bottom" alt="..." />
                  <div className="card-body">
                    <div><img src={cardLogoTwo} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                    <div className="mx-2">
                      <h5 className="card-title-one">Hay</h5>
                      <p className="text-paragraf">Barcelona / Spain</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col col-mb-3">
              <NavLink to={"/shop"}>
                <div className="card">
                  <img src={kettal} className="card-img-bottom" alt="..." />
                  <div className="card-body">
                    <div><img src={cardLogoThree} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                    <div className="mx-2">
                      <h5 className="card-title-one">Kettal</h5>
                      <p className="text-paragraf">Barcelona / Spain</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col col-mb-3">
              <NavLink to={"/shop"}>
                <div className="card">
                  <img src={lladro} className="card-img-bottom" alt="..." />
                  <div className="card-body">
                    <div> <img src={cardLogoFour} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                    <div className="mx-2">
                      <h5 className="card-title-one">Lladro</h5>
                      <p className="text-paragraf">Valensia / Spain</p>
                    </div>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col col-mb-3">
              <NavLink to={"/shop"}></NavLink>
              <div className="card">
                <img src={poliform} className="card-img-bottom" alt="..." />
                <div className="card-body">
                  <div><img src={cardLogoFive} style={{ width: "50px", height: "50px" }} className="card-img-bottom" alt="..." /></div>
                  <div className="mx-2">
                    <h5 className="card-title-one">Poliform</h5>
                    <p className="text-paragraf">Como / Italy</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

     <section className="section5 mx-5 my-5">
        <h2 className="fw-bold">{t("home-section-one.15")}</h2>
        <p style={{ color: "#ccc" }}>{t("home-section-one.16")}</p>
        <div className="container d-flex align-items-lg-end">
          <div className="col-sm-6 col-md-8 col-lg-8 mx-4">
            <div className='row g-4' style={{ order: 1 }}>
              {productData.slice(3, 6).map(item => (
                <SingleHomeProducts
                  id={item.id}
                  title={item.title}
                  img1={item.img[0]}
                  price={item.price}
                  category={item.category}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-4">
            <img className="lazy" src={lazy} style={{ width: "100%", height: "540px", borderRadius: "15px", order: "2" }} />
          </div>
        </div>
      </section>



      <section className="section6 mx-5 my-5">
      <h2 className="fw-bold">{t("home-section-one.17")}</h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-5 d-flex flex-column">
              <img src={furniture} style={{width: "100%"}}/>
            </div>
            <div className="col-sm-12 col-md-7">
                    <h5 className="fw-bold">{t("home-section-one.18")}</h5>
                    <p style={{ color: "#727272" }}>{t("home-section-one.19")}</p>
                    <ul>
                      <li style={{ color: "#727272" }}>{t("home-section-one.20")}</li>
                      <li style={{ color: "#727272" }}>{t("home-section-one.21")}</li>
                      <li style={{ color: "#727272" }}>{t("home-section-one.22")}</li>
                    </ul>
                    <div className="photo d-flex">
                    <img className="video-photo" src={videoPhoto} style={{ width: "100%" }} />
                      <div className="content">
                        <h6 className="text-title">{t("home-section-one.23")}</h6>
                        <h3 className="text-title">{t("home-section-one.24")}</h3>
                      </div>
                    </div>
                </div>
          </div>
        </div>
</section>

      <section className="section7 my-5 mx-5" style={{ height: "50vh" }}>
        <h2 className="fw-bold">Lastest articles</h2>
        <div className="container">

        </div>
      </section>

      {/* <section className="section8 mx-5 my-5">
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
      </section> */}
    </>
  )
}

export default Home