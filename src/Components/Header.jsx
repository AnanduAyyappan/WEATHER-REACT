import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
Navbar
const Header=()=> {
  return (
    
    <Navbar style={{ zIndex: 1,position:'fixed', top:'0' }} className="bg-light position-fixed w-100">
    <Container>
      {/* Use 'as={Link}' to avoid the nested <a> issue */}
      <Navbar.Brand 
        as={Link} 
        to="/" 
        className="fs-5 fw-bolder" 
        style={{ textDecoration: 'none', color: 'white'}}
      >
        <i className="fa-solid fa-bolt"></i>Weather Checker
      </Navbar.Brand>
      <Link to={'/aboutus'} style={{textDecoration:'none', color:'white'}}>About us</Link>
    </Container>
  </Navbar>
  
  )
}

export default Header