// import React from 'react'

// const Myprofile = () => {
//   return (
//     <>
//     <div className='mx-5' style={{height: "100vh"}}>
//         <div className='d-flex align-items-center justify-content-center mt-5' style={{textAlign: "center"}}>
//         <div classname="container">
//         <div classname="row ">
//             <div class="col-12 col-lg-12">
//             <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
//             <h2 class="fw-normal">{localStorage.getItem("firstname")}</h2>
//             <h2>{localStorage.getItem("lastname")}</h2>
//             <p><a class="btn btn-secondary" href="#">View details »</a></p>
//         </div>
//         </div>
//     </div>
//         </div>
//     </div>

//     </>
//   )
// }

// export default Myprofile

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Myprofile = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [againpassword, setAgainpassword] = useState("")
  const [alert, setAlert] = useState("")
  const [text, setText] = useState("")
  const navigate = useNavigate();

  const registerSubmit = e=>{
    e.preventDefault();
    
    if (!firstname || !lastname || !email || !password || !againpassword) {
      setAlert("danger")
      setText("Please fill the input")
    } else {
      if (password === againpassword) {
      localStorage.setItem("firstname", firstname)
      localStorage.setItem("lastname", lastname)
      localStorage.setItem("email", email)
      localStorage.setItem("password", password)
      localStorage.setItem("againpassword", againpassword)
      navigate("/login")
      } else {
        setAlert("warning")
        setText("password is different")
      }
    }
  }


  return (
        <div className='mx-5' style={{height: "100vh"}}>
        <div className='d-flex align-items-center justify-content-center mt-5' style={{textAlign: "center"}}>
        <div classname="container">
        <div classname="row ">
            <div class="col-12 col-lg-12">
            <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
            <h2 class="fw-normal">{localStorage.getItem("firstname")}</h2>
            <h2>{localStorage.getItem("lastname")}</h2>
            <p><a class="btn btn-outline-dark" href="#">Go to settings »</a></p>
        <button className='btn btn-dark' onClick={()=> {
                  localStorage.removeItem("login");
                  location.assign("/login");
                }}> Logout</button>
        </div>
        </div>
    </div>
       
        </div>
    </div>

  )
}


export default Myprofile