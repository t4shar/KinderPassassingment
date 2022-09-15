import React from 'react'

const val ={
    minWidth : '25vw'
}

export default function Card({ name,email,dob,city,mobile,address,id,handleupdel }) {
    return (
        <div className='col-sm-4' style={val}>
            <div class="card">
      <div class="card-body">
        <h5 class="card-header">{name}</h5>
        <p class="card-text">{email}</p>
        <p class="card-text">{dob}</p>
        <p class="card-text">{address}</p>
        <p class="card-text">{city}</p>
        <p class="card-text">{mobile}</p>
        <button class="btn btn-primary" onClick={()=>{ handleupdel(id) }} >Delete</button>
      </div>
    </div>
        </div>
    )
}
