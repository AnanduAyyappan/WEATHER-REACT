import React from 'react'
import { Link } from 'react-router-dom'

const Landing=()=> {
  return (
    <div className="row d-flex align-items-center justify-content-center vh-100">
      <div className="col text-center">
        <h1>Try this out</h1>
        <h5>This is an application i developed to gather the information about weather using REACT libraries the data given here may not be accurate as the present</h5>
        <Link to={'/check'} className="btn btn-light mt-3">Get started</Link>
      </div>
    </div>
  )
}

export default Landing