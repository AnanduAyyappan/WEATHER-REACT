import React from 'react'
import pic from '../assets/mypic.png'
const About = () => {
  return (
    <div className="row">
        <div className="col-lg-4"><img src={pic} className='img-fluid ms-5' style={{borderRadius:'55%',marginTop:'100px'}} alt='noimage'/></div>
        <div className="col"></div>
        <div className="col-lg-7">
    <div style={{marginTop:'100px',textAlign:'justify', height:'58vh'}} className='px-5 mb-5'>
        <h2 className='mb-4'>About Me</h2>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hi, i am Anandu an aspiring webdeveloper who seeks to build my career in the everchanging field ,I have completed my BTech graduation in Computer Science and Engineering from Mar Athanasius College of Engineering Kothamangalam under KTU in 2024 also am a Diploma holder in Computer Engineering currently am pursuing my internship at Luminar Technolab Kakkanad and i believe it will provide great 
    oppurtunity in my life,</p></div>
 </div>
  </div>
  )
}

export default About