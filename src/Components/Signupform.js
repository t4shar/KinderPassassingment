import React from "react";
import {Link , NavLink, useNavigate } from "react-router-dom";



function Signupform() {
  const Navigate = useNavigate();
  const handleupsubmit = () => {
    localStorage.setItem("Login", "true");
    Navigate("/home");
    console.log("HELLO");
  };
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <h1>Create a Account</h1>
      <form onSubmit={handleupsubmit}>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label
              htmlFor="inputEmail4"
              className="fs"
              style={{ fontWeight: "bold" }}
            >
              FirstName 
            <span>*</span>
            </label>
            <input required
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="Fisrtname"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" style={{ fontWeight: "bold" }}>
              LastName
            <span>*</span>
            </label>
            <input required
              type="text"
              className="form-control"
              id="inputPassword4"
              placeholder="Secondname"
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" style={{ fontWeight: "bold" }}>
              Email
            <span>*</span>
            </label>
            <input required
              type="email"
              className="form-control"
              id="inputEmail4"
              placeholder="Email"
            />
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="inputPassword4" style={{ fontWeight: "bold" }}>
              Password
            <span>*</span>
            </label>
            <input required
              type="password"
              className="form-control"
              id="inputPassword4"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress" style={{ fontWeight: "bold" }}>
            Address
          <span>*</span>
            </label>
          <input required
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Address"
          />
        </div>
        <div className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputCity" style={{ fontWeight: "bold" }}>
              City
            <span>*</span>
            </label>
            <input required type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip" style={{ fontWeight: "bold" }}>
              Zip
            <span>*</span>
            </label>
            <input required type="text" className="form-control" id="inputZip" />
          </div>
          <div className="form-group col-md-2">
            <label htmlFor="inputZip" style={{ fontWeight: "bold" }}>
              Company Name
            <span>*</span>
            </label>
            <input required type="text" className="form-control" id="inputZip" />
          </div>
        </div>
        <div className="form-group"></div>
        <button type="submit" className="btn btn-primary">
          Sign up
        </button>
        <NavLink to='/login' className="btn btn-primary mx-3">
          Already have an account
        </NavLink>
      </form>
    </div>
  );
}

export default Signupform;
