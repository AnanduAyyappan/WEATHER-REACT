import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Landing from './Pages/Landing'
import Check  from './Pages/Check'
import Result from './Pages/Result'


function App() {
  

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='/aboutus' element={<About/>}/>
      <Route path='/check' element={<Check/>}/>
      <Route path='/result' element={<Result/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
