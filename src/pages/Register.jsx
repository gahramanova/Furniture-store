import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
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
    <div style={{ height: "100vh" }}>
    <div className="d-flex flex-column w-100 align-items-center justify-content-center">
      <h1 className="my-5">Sign Up</h1>
      <div className="col-6">
        <form onSubmit={registerSubmit}>
        
        <div className="mb-3">
              <div class={`alert alert-${alert}`} role="alert">
              {text}
              </div>
              <label className="form-label">First Name</label>
              <input onChange={e=>setFirstname(e.target.value)} type="text" className="form-control"
              />
            </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input onChange={e=> setLastname(e.target.value)} type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input onChange={e=> setEmail(e.target.value)} type="email" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input onChange={e=> setPassword(e.target.value)} type="password" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Again Password</label>
            <input onChange={e=> setAgainpassword(e.target.value)} type="password" className="form-control" />
          </div>
          <p><Link to="/login">Do you have already an account?</Link></p>

          <button type="submit" className="btn btn-dark">
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Register