import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div style={{ height: "100vh" }}>
    <div className="d-flex flex-column w-100 align-items-center justify-content-center">
      <h1 className="my-5">Sign Up</h1>
      <div className="col-6">
        <form>
          
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input type="text" className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input type="text" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>

          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" />
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