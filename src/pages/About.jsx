import React from 'react'
import coverphoto from "../assets/img/about-coverphoto.jpg"

const About = () => {
  return (
    <>
    <div className='bg'>
      <img src={coverphoto} style={{objectFit: "contain", width: "100%"}}></img>
    </div>
    </>
  )
}

export default About