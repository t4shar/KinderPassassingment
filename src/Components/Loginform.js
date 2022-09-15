import React from 'react'

import { NavLink } from 'react-router-dom'

function Loginform() {
  const variable = {
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      flexDirection:'column',
      height:'100vh'
  }
  const val = {
    fontWeight : 'bold'
  }
  const val2 = {
    width : '50vw',
    maxWidth : '50vh'
  }
  return (
    <div className='flex row' style={variable}>
      <form>
      <h2 className=' p-2 text-center'>
        Login here
      </h2>
        <div className="p-2 form-group" style={val2}>
          <label htmlFor="formGroupExampleInput" style={val}>Email : <span>*</span>
            </label>
          <input required type="email" className="form-control" style={{  }} id="formGroupExampleInput" placeholder="email"/>
        </div>
        <div className=" p-2 form-group">
          <label  required htmlFor="formGroupExampleInput2" style={val}>Password : <span>*</span>
            </label>
          <input type="password" className="form-control" id="formGroupExampleInput2" placeholder="password"/>
        </div>
        <div className="p-2">

      <NavLink className="btn btn-primary" to='/home'>Login</NavLink>
        </div>
        {/* <div className="p-2">

      <NavLink  to='/' className="btn btn-primary">Sign-up </NavLink>
        </div> */}
      </form>
      
    </div>
  )
}

export default Loginform