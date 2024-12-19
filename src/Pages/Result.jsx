import React from 'react'
import Check from './Check'
import { useLocation } from 'react-router-dom'

const Result = () => {
  const location=useLocation()
  console.log(location);
const weatherData=location.state?.weatherData

  return (
    
    <div  className="row d-flex align-items-center justify-content-center vh-100" style={{fontSize:'48px', textAlign:'justify'}} >Result
    <ul className='container border fs-5 fw-5'>
    <li className='list-use d-flex justify-content-center'>Name : <span style={{color:'red'}}>{weatherData.name}</span></li>
    <li className='list-use d-flex justify-content-center'>Country : <span style={{color:'red'}}>{weatherData.sys?.country}</span></li>
    <li className='list-use d-flex justify-content-center'>Temparature : <span style={{color:'red'}}>{weatherData.main?.temp}</span></li>
    <li className='list-use d-flex justify-content-center'>Sun rise : <span style={{color:'red'}}>{weatherData.sys?.sunrise}</span></li>
    <li className='list-use d-flex justify-content-center'>Sun set : <span style={{color:'red'}}>{weatherData.sys?.sunset}</span></li>
    <li className='list-use d-flex justify-content-center'>Weather : <span style={{color:'red'}}>{weatherData.weather[0].description}</span></li>
    <li className='list-use d-flex justify-content-center'>Minimum Temparature : <span style={{color:'red'}}>{weatherData.main?.temp_min}</span></li>
    <li className='list-use d-flex justify-content-center'>Maximum Temparature :  <span style={{color:'red'}}>{weatherData.main?.temp_max}</span></li>
    <li className='list-use d-flex justify-content-center'>Pressure : <span style={{color:'red'}}>{weatherData.main?.pressure} hPa</span></li>
    <li className='list-use d-flex justify-content-center'>Humidity :<span style={{color:'red'}}>{weatherData.main?.humidity}%</span></li>  
    </ul>
    </div>


  )
}

export default Result