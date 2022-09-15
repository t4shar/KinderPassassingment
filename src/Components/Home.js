import React from 'react'
import { useState, useRef } from 'react'
import Card from './Card'


export default function () {

  // Cretaeing some state  for update functionalities
   
  const [name, setname] = useState(null);
  const [email, setemail] = useState(null)
  const [mobile, setmobile] = useState(null)
  const [dob, setdob] = useState(null)
  const [address, setaddress] = useState(null)
  const [city, setcity] = useState(null)

  const ref = useRef(null)
  const handleupadd = () => {
    ref.current.click();
  }
  const arr = [
    {
      id: "1",
      name: "Tushar",
      email: 't4shar@gmail.com',
      address: '44th street',
      mobile: '7988372160',
      city: 'karnal',
      dob: '01/02/2002'
    },
    {
      id: "2",
      name: "Tushar",
      email: 't4shar@gmail.com',
      address: '44th street',
      mobile: '7988372160',
      city: 'karnal',
      dob: '01/02/2002'
    },
    {
      id: "3",
      name: "Tushar",
      email: 't4shar@gmail.com',
      address: '44th street',
      mobile: '7988372160',
      city: 'karnal',
      dob: '01/02/2002'
    }
  ]
  
  const [data, setdata] = useState(arr);
  
  const hangle = ()=>{
    const dat = data;
    const id = dat.length+1;
    const obj = {
       id,name,email,address,mobile,city,dob
    }
    dat.push(obj);
    // console.log(dat);
    // console.log(obj);
    setdata(dat);
    console.log(data);
    ref.current.click();
  }

  const handleupdel = (i) => {
    // console.log(i);
    // console.log(data);
    const set = data.filter((c) => {
      return c.id != i;
    });
    // console.log(set);
    setdata(set);
  }


  return (
    <div>
      <button type="button" ref={ref} style={{ display: 'none' }} class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>


      {/* // bootstrap modal  */}

      <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">New Employee</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Name:</label>
                  <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} class="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Email:</label>
                  <input type="text" value={email} onChange ={(e)=>{setemail(e.target.value)}} class="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Address:</label>
                  <input type="text" value={address} onChange ={(e)=>{setaddress(e.target.value)}} class="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">city:</label>
                  <input type="text" value={city} onChange ={(e)=>{setcity(e.target.value)}} class="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">mobile:</label>
                  <input type="text"  value={mobile} onChange ={(e)=>{setmobile(e.target.value)}} class="form-control" id="recipient-name" />
                </div>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">Dob:</label>
                  <input type="text" value={dob} onChange ={(e)=>{setdob(e.target.value)}} class="form-control" id="recipient-name" />
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary" onClick={hangle}>Send message</button>
            </div>
          </div>
        </div>
      </div>



      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Manager<span style={{ color: 'red' }}>Book</span>  </span>
        <button onClick={handleupadd} className='btn btn-primary'> ADD Data</button>
      </nav>
      <div className='row'>
        {
          data.map((c, i) => {
            return <Card name={c.name} email={c.email} dob={c.dob} city={c.city} mobile={c.mobile} address={c.address} id={c.id} handleupdel={handleupdel} />
          })
        }
      </div>

    </div>
  )
}
