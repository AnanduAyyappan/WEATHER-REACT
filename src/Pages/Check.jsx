import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
Link


 const Check = () => {
  const [data, setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    const [inputValue,setInputValue]=useState('');
    const navigate=useNavigate()
    
    

  const useCusCheck =()=>{
  if(inputValue){
    setLoading(true)
    async function fetchData(){
    try{
      const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=228077f01eab00cc9405b5c3e3c5ed25&units=metric`);
      if(response.status>=200&&response.status<300){
      const resul=await response.json();
            console.log(resul);
      setData(resul);
      navigate('/result', { state: { weatherData: resul } });
      }else{
        console.log('status error',response.status);
        
      }
    }catch(err){
      setError(err);
    }finally{
      setLoading(false);
    }
  }
  fetchData();
}else{
  alert("Enter any place")
}
};

  return (
    <div style={{marginTop:'100px'}}>
        
        <div className='d-flex justify-content-center' style={{marginTop:'300px', marginBottom:'220px'}}>
        <input type='text' placeholder='Enter place name ' id='inpu' value={inputValue}onChange={(e)=>setInputValue(e.target.value)} className='form-control me-2 w-25'/>
        <button className='btn btn-light' onClick={()=>useCusCheck()}>Check Now</button>
        </div>
        </div>
  )
}
 export default Check