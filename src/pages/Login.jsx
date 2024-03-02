import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const userData = {
  email: "admin@narmin.com",
  pass: "1234",
};

const Login = () => {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [text, setText] = useState();
  const [alert, setAlert] = useState();
  const navigate = useNavigate()

  const checkForm = (e) => {
    e.preventDefault();
    if(!email || !pass) {

      setText("Please fill input")
      setAlert("danger")
    }else {
      if (userData.email !== email) {
        setText("This account is not defined")
        setAlert("danger")
        setTimeout(() => {
          navigate('/register')
        }, 3000);
      } else {
       if (userData.email === email && userData.pass === pass) {
        setText("Succesfully")
        setAlert("success")
        setTimeout(() => {
          navigate("/")
        }, 3000);
       } else {
        setText("Email or password are wrong! Please check again")
        setAlert("danger")
       }
      }

      
    }
  };
  return (
    <div style={{ height: "80vh" }}>
      <div className="d-flex flex-column w-100 align-items-center justify-content-center">
        <h1 className="my-5">Sign In</h1>
        <div className="col-6">
          <form onSubmit={checkForm}>
            
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
              <input value={pass} onChange={e=>setPass(e.target.value)} type="password" className="form-control" />
            </div>

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
