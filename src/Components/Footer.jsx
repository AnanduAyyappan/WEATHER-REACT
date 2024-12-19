import React from 'react'
import { Link } from 'react-router-dom'
Link

function Footer() {
  return (
    <div style={{height:'100px',paddingLeft:'20px'}} className='mt-container w-100 my-5'>
    <div className='d-flex justify-content-between'>
      {/*intro */}
      <div style={{width:'400px'}}>
        <h5><i className="fa-solid fa-bolt"></i>
        Weather Checker</h5>
        <p>Designed and built with all the love in the world by the luminar team with the help of our contributors</p>
        <p>code licensed </p>
      </div>
      {/* links */}
      <div className='d-flex flex-column'>
        <h5>Links</h5>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing</Link>
        <Link to={'/check'} style={{textDecoration:'none',color:'white'}}>Check Page</Link>
        <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Clear Page</Link>
      </div>
      {/*guides */}
      <div className='d-flex flex-column'>
        <h5>Guides</h5>
        <Link to={''} style={{textDecoration:'none',color:'white'}} target='_blank'>React</Link>
        <Link to={''} style={{textDecoration:'none',color:'white'}} target='_blank'>React Bootstrap</Link>
        <Link to={''} style={{textDecoration:'none',color:'white'}} target='_blank'>React Router</Link>
      </div>
      {/*contact */}
      <div className='d-flex flex-column'>
        <h5>Contacts</h5>
        <div className='d-flex'>
        <input type='text' placeholder='enter your email here' className='form-control me-2'/>
        <button className='btn btn-light'><i className='fa-solid fa-arrow-right'></i></button>
        </div>
        <div className='d-flex justify-content-between mt-2 '>
        <Link to={'https://x.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-twitter"></i></Link>
        <Link to={'https://www.instagram.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-instagram"></i></Link>
        <Link to={'https://www.linkedin.com/home?originalSubdomain=in'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-linkedin"></i></Link>
        <Link to={'https://github.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-github"></i></Link>
        <Link to={'https://www.facebook.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-brands fa-facebook"></i></Link>
        <Link to={'https://www.truecaller.com'} style={{textDecoration:'none',color:'white'}} target='_blank'><i className="fa-solid fa-phone"></i></Link>
        </div>
       </div>

    </div>
  </div>
  )
}

export default Footer