import React from 'react'
import { useState } from 'react'
import Card from './Card'


export default function () {

  const handleupadd = () =>{

  } 

  const arr = [
    {
      id : "1",
      name : "Tushar",
      email : 't4shar@gmail.com',
      address : '44th street',
      mobile : '7988372160',
      city: 'karnal',
      dob : '01/02/2002'
    },
    {
      id : "2",
      name : "Tushar",
      email : 't4shar@gmail.com',
      address : '44th street',
      mobile : '7988372160',
      city: 'karnal',
      dob : '01/02/2002'
    },
    {
      id : "3",
      name : "Tushar",
      email : 't4shar@gmail.com',
      address : '44th street',
      mobile : '7988372160',
      city: 'karnal',
      dob : '01/02/2002'
    }
  ]

  const [data, setdata] = useState(arr);


  const handleupdel =(i) =>{
    console.log(i);
    console.log(data);
    const set = data.map( (c)=>{
        return c.id != i ? c : {}
      } )
      console.log(set);
    setdata(set);
  }


  return (
    <div>
      <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">Manager<span style={{color : 'red'}}>Book</span>  </span>
        <button onClick={handleupadd} className='btn btn-primary'> ADD Data</button>
      </nav>
      <div className='row'>
    {
      arr.map( (c,i)=>{
        return <Card name={c.name} email={c.email} dob = {c.dob} city = {c.city} mobile = {c.mobile} address={c.address} id={c.id} handleupdel={handleupdel} />
      })
    }
    </div>

    </div>
  )
}
