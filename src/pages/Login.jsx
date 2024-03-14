import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [text, setText] = useState();
  const [alert, setAlert] = useState();


  const loginSubmit = e=> {
    e.preventDefault()

      if (!email || !password) {
        setAlert("danger")
        setText("Please fill the input")
      } else {
        if (email === localStorage.getItem("email") && password === localStorage.getItem("password")) {
          localStorage.setItem("login", "true")
          location.assign("/products")
        } else {
          setAlert("warning")
          setText("email or password is wrong")
        }
      }
  
  }

  return (
    <div style={{ height: "80vh" }}>
      <div className="d-flex flex-column w-100 align-items-center justify-content-center">
        <h1 className="my-5">Sign In</h1>
        <div className="col-6">
          <form onSubmit={loginSubmit}>
            
            <div className="mb-3">
              <div class={`alert alert-${alert}`} role="alert">
              {text}
              </div>

              <label className="form-label">Email address</label>
              <input value={email} onChange={e=>setEmail(e.target.value)} type="email" className="form-control"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="form-control" />
            </div>
            <p><NavLink to={"/register"}>Create new account</NavLink></p>
            <p><NavLink to={"/forgotpassword"}>Forgot your password?</NavLink></p>
            <button type="submit" className="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
