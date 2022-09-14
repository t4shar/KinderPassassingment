import React from 'react'
import { Navigate, useNavigate } from "react-router-dom";
const handleupsubmit = () =>{
  localStorage.setItem("Login","true");
  Navigate("/home")
}

function Signupform() {
  return (
    <div className="container">
      <h1>
        Create a Account
      </h1>
    <form>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" className='fs' style={{ fontWeight : 'bold' }}>FirstName</label>
      <input type="text" className="form-control" id="inputEmail4" placeholder="Fisrtname"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4" style={{ fontWeight : 'bold' }}>LastName</label>
      <input type="text" className="form-control" id="inputPassword4" placeholder="Secondname"/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputEmail4" style={{ fontWeight : 'bold' }}>Email</label>
      <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputPassword4" style={{ fontWeight : 'bold' }}>Password</label>
      <input type="password" className="form-control" id="inputPassword4" placeholder="Password"/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress" style={{ fontWeight : 'bold' }}>Address</label>
    <input type="text" className="form-control" id="inputAddress" placeholder="Address"/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity" style={{ fontWeight : 'bold' }}>City</label>
      <input type="text" className="form-control" id="inputCity"/>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip" style={{ fontWeight : 'bold' }}>Zip</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip" style={{ fontWeight : 'bold' }}>Company</label>
      <input type="text" className="form-control" id="inputZip"/>
    </div>
  </div>
  <div className="form-group">
    
  </div>
  <button type="submit" className="btn btn-primary" onClick={handleupsubmit}>Sign up</button>
</form>
 
</div>
  )
}

export default Signupform