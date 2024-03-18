import React from 'react'
import coverphoto from "../assets/img/about-coverphoto.jpg"
import aboutOne from "../assets/img/about-1.webp"
import aboutTwo from "../assets/img/about-2.webp"
import memberOne from "../assets/img/team-member-one.png"
import memberTwo from "../assets/img/team-member-two.png"
import memberThree from "../assets/img/team-member-three.png"
import facebook from "../assets/img/facebook.png"
import instagram from "../assets/img/instagram.svg"
import linkedin from "../assets/img/linkedin.png"
import twitter from "../assets/img/twitter.png"
import aboutvideo from "../assets/img/aboutus-video.jpg"
const About = () => {
  return (
    <>
    <section>
      <div className='bg-main'>
      <div className='content'>
            <h1 className='card-title fw-bold display-4'>About Us</h1> 
             
      </div>
      </div>
    </section>
    
    <section className='about-section1'>
        <div className="container col-xxl-12 ">
        <div className="row flex-lg-row align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-9 d-flex">
            <div className='col-md-6 col-sm-6'>
              <img src={aboutOne}  style={{objectFit: "contain", height: "100%", width: "100%"}}/>
            </div>
            <div className='col-md-6 col-sm-6'>
              <img src={aboutTwo}  style={{objectFit: "contain", height: "100%", width: "100%"}} className='mx-2'/>
            </div>
          </div>
          <div className="col-lg-3">
            <h1 className="fw-bold lh-1 mb-3">About our online store</h1>
            <p style={{color:"#ccc"}}>One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff.</p>
            <p style={{color:"#ccc"}}>Dictumst per ante cras suscipit nascetur ullamcorper in nullam fermentum condimentum torquent iaculis reden posuere potenti viverra condimentum dictumst id tellus suspendisse convallis condimentum.</p>
            
          </div>
        </div>
      </div>

    </section>


    <section className='about-section2 my-5 mx-5'>
      <h3 className='fw-bold text-center'>Team Memmbers</h3>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card  card-member" >
              <img src={memberOne} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold">Marvin McKinney</h5>
                <p className="card-text" style={{color: "#ccc"}}>Ceo, Co-Founder</p>
                <div className='icons d-flex mx-2'>
                  <img src={facebook}/>
                  <img src={linkedin}/>
                  <img style={{backgroundColor: "#623828"}} src={instagram}/>
                </div>
                
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card card-member" >
              <img src={memberTwo} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold">Diana Russel</h5>
                <p className="card-text" style={{color: "#ccc"}}>Ceo, Co-Founder</p>
                <div className='icons d-flex mx-2'>
                  <img src={facebook}/>
                  <img src={twitter}/>
                  <img src={linkedin}/>
                  <img style={{backgroundColor: "#623828"}} src={instagram}/>
                </div>
                
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 col-md-4'>
            <div className="card card-member" >
              <img src={memberThree} className="card-img-top" alt="..." />
              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title fw-bold">Kristin Watson</h5>
                <p className="card-text" style={{color: "#ccc"}}>Ceo, Co-Founder</p>
                <div className='icons d-flex'>
                  <img src={facebook}/>
                  <img src={twitter}/>
                  <img style={{color: "#623828"}} src={instagram}/>
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className='about-section3  my-5'>
      <div className='container d-block align-content-center justify-content-center'>
        <div className='body'>
            <img src={aboutvideo} className='video-photo'></img>
          <div className='content'>
            <h5 className='card-title'>Furniture collection</h5>
            <h2 className='card-title fw-bold'>How we start out businnes</h2>
            
       </div>
        </div>
      </div>
    </section>

    {/* <section className="section4 mx-5 my-5">
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

export default About