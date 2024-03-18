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
import gridOne from "../assets/img/grid-one.webp"
import gridTwo from "../assets/img/grid-two.webp"
import furniture from "../assets/img/furniture-choosing-rules.webp"
import videoPhoto from "../assets/img/video-photo.jpg"
import { CiPlay1 } from "react-icons/ci";

const Home = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 900,
    autoplay: false,
    autoplaySpeed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    accessibility: true,
    // style: { width: "100%", overflow: "hidden"},
    // prevArrow: <div className="slick-prev">Previous</div>,
    // nextArrow: <div className="slick-next">Next</div>
  };

  const [productData] = useContext(ProductContext)
  return (
    <>
      <section>
        <Slider {...settings}>
          <div className="slider">
            <img src={sliderOne} style={{ objectFit: "contain", height: "100%" }} />
            <div className="content">
              <div className="first d-flex align-items-center">
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider1} />
                <h5 style={{ color: "#414240" }}>Discover the more products<br /> in the decor category</h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>Terracota Vase<br /> by Courtney Hanrey</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold"> Shop now</button>

              </div>
            </div>
          </div>
          <div className="slider">
            <img src={sliderTwo} style={{ objectFit: "contain", height: "100%" }} />
            <div className="content">
              <div className="first d-flex align-items-center">
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider2} />
                <h5 style={{ color: "#414240" }}>Discover the more products<br /> in the chair category</h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>Upholstered chair<br /> by Esther Howard</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold"> Shop now</button>

              </div>
            </div>
          </div>
          <div className="slider">
            <img src={sliderThree} style={{ objectFit: "contain", height: "100%" }} />
            <div className="content">
              <div className="first d-flex align-items-center">
                <img className="mx-2" style={{ width: "80px", height: "80px" }} src={slider3} />
                <h5 style={{ color: "#414240" }}>Discover the more products<br /> in the sofas category</h5>
              </div>
              <div className="second">
                <h1 className="fw-bold" style={{ color: "#414240" }}>Sectional fabric sofa<br /> by Ramon Esteve</h1>
              </div>
              <div className="third">
                <button className="btn fw-bold"> Shop now</button>

              </div>
            </div>
          </div>
        </Slider>
      </section>

      {/* Our Categories ==================================================================================================*/}
      <section className="my-4 mx-4 home-section">
        <h2 className="fw-bold">Our Categories</h2>
        <p>Lots of new products and product collections</p>
        <div className="container">
          <div className="row row-cols-2 row-cols-md-5 g-4">
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={chairs} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Chairs</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={tables} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Tables</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={sofas} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Sofas</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={armchair} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Armchairs</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={beds} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Beds</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={storage} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Storage</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={textiles} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Textiles</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={lighting} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Lighthing</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={toys} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Toys</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="col mb-3">
              <NavLink to={"/categories"}>
                <div className="card card-home">
                  <img src={decor} className="card-img-top" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Decor</h5>
                  </div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="my-5 mx-5 section2">
        <h2 className="fw-bold">Weekly Bestsellers</h2>
        <div className='container my-5'>
          <div className='row row-cols-2 row-cols-md-5 g-4'>
            {productData.slice(0, 10).map(item => (
              <SingleHomeProducts
                id={item.id}
                title={item.title}
                img={item.img}
                price={item.price}
                category={item.category}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section3 my-5 mx-5">
        <h2 className="fw-bold">Shopping by Brands</h2>
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

      <section className="section4 mt-3">
      <div className="text-center">
      <h2 className="fw-bold">Products Collection</h2>
      <p>Explore product collections from our vendors</p>
      </div>
      <div class="parent">
          <div style={{backgroundColor: "green"}} class="div1"></div>
          <div style={{backgroundColor: "red"}} class="div2"> </div>
          <div style={{backgroundColor: "purple"}} class="div3"> </div>
          <div style={{backgroundColor: "orange"}} class="div4"> </div>
          <div style={{backgroundColor: "blue"}} class="div5"> </div>
      </div>
    </section>

      <section className="section5 mx-5 my-5">
        <h2 className="fw-bold">Furniture collection of the week</h2>
        <p style={{ color: "#ccc" }}>The most popular products from the collection</p>
        <div className="container d-flex align-items-lg-end">
          <div className="col-sm-6 col-md-8 col-lg-8 mx-4">
            <div className='row g-4' style={{ order: 1 }}>
              {productData.slice(3, 6).map(item => (
                <SingleHomeProducts
                  id={item.id}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  category={item.category}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>
          <div className="col-sm-6 col-md-5 col-lg-4">
            <img className="lazy" src={lazy} style={{ width: "420px", height: "540px", borderRadius: "15px", order: "2" }} />
          </div>
        </div>
      </section>



      <section className="section6 mx-5 my-5">
        <h2 className="fw-bold">Rules for choosing furniture</h2>
        <div className="row">
          <div className="d-flex">
            <div className="col-12 col-sm-4 col-lg-5">
              <img src={furniture} style={{ width: "100%" }} />
            </div>
            <div className="col-12 col-sm-8 col-lg-7 d-flex flex-column mx-4">
              <div className="col-sm-8 " >
                <h5 className="fw-bold">Whether living on your own or with a family, your living room is an important space.</h5>
                <p style={{ color: "#ccc" }}>This room is where your family spends time together, and it is the room most of your guests will spend the majority of their time in.
                  Choosing furniture that creates a pleasant, welcoming appearance while holding
                  up against the wear and tear of everyday life is the key in getting this space to work for your needs.</p>
                <ul>
                  <li style={{ color: "#ccc" }}>Choose items in a single color scheme and style</li>
                  <li style={{ color: "#ccc" }}>Consider the area of the room</li>
                  <li style={{ color: "#ccc" }}>Do not buy unnecessary pieces of furniture</li>
                </ul>
              </div>
              <div className="col-sm-4">
                <div className="main">
                  <img className="video-photo" src={videoPhoto} style={{ objectFit: "contain", height: "300px" }} />
                  <div className="content">
                    <p>How to choose furniture</p>
                    <h3 className="text-title">SØLREM furniture collection</h3>
                    {/* <div className="player align-items-center">
                  <CiPlay1 />
                    </div> */}
                  </div>
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