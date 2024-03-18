import React from 'react'
import contactImageOne from "../assets/img/contact-image-1.png"
import contactImageTwo from "../assets/img/contact-image-2.png"
const Contact = () => {
  return (
    <>
      <section>
      <div className='contact-main'>
      <div className='content'>
            <h1 className='card-title fw-bold display-4'>Contact Us</h1> 
             
      </div>
      </div>
    </section>
    <section className='section-contact mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 col-sm-6'>
            <div className='d-flex'>
              <div><img src={contactImageOne} style={{width: "100%"}}/></div>
              <div className='d-flex flex-column text-area justify-content-center'>
              <ul>
                  <li><h2 className='fw-bold'>Milano</h2></li>
                  <li><h6 className='fw-bold'>Piazzale Ferrara Via Mincio, 4, 20139</h6></li>
                  <li><p className='fw-bold'>Monday – Friday 09:00 – 17:00</p></li>
                  <li><a className='fw-bold'>xtemos@gmail.com</a></li>
                  <li><a className='fw-bold'>(686) 492-1044</a></li>
                
                </ul>
              </div>
            </div>
          </div>
          <div className='col-12 col-sm-6 section-contact-second'>
          <div className='d-flex'>
              <div><img src={contactImageTwo} style={{width: "100%"}}/></div>
              <div className='d-flex flex-column text-area justify-content-center'>
                <ul>
                  <li><h2 className='fw-bold'>Milano</h2></li>
                  <li><h6 className='fw-bold'>Piazzale Ferrara Via Mincio, 4, 20139</h6></li>
                  <li><p className='fw-bold'>Monday – Friday 09:00 – 17:00</p></li>
                  <li><a className='fw-bold'>xtemos@gmail.com</a></li>
                  <li><a className='fw-bold'>(686) 492-1044</a></li>
                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className='mx-5 my-5 section-contact-second'>
      <div className='container my-4'>
        <div className='row'>
          <div className='col-12 col-sm-6'>
          <h3 className='fw-bold'>Contact with an expert </h3>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Name"/>
            </div>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Email"/>
            </div>
            <div className="input-group mb-3">
        <textarea cols="40" rows="10"  placeholder="Write your message..." name="your-message" style={{width: "766px", height: "213px"}}></textarea>
            </div>
            <div className="input-group mb-3">
              <button>Send message</button>
           </div>
          </div>
          <div className='col-12 col-sm-6 '>
          <h3 className='fw-bold'>Frequently asked questions </h3>
            <div className='questions'>
              <ul className='p-0'>
                <li className='mb-5 fw-bold'>My order hasn't arrived yet. Where is it?</li>
                <li className='mb-5 fw-bold'>Do you deliver on public holidays?</li>
                <li className='mb-5 fw-bold'>Do you deliver to my postcode?</li>
                <li className='mb-5 fw-bold'>Is next day delivery available on all orders?</li>
                <li className='mb-5 fw-bold'>Do I need to be there to sign for delivery?</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact