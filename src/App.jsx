import React, { useState } from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Header from './Components/Header'
import Footer from './Components/Footer';
import OurFood from './Components/OurFood';
import Home from './Components/Home';
import AboutUs from './Components/AboutUs';
import SignIn from './Components/SignIn';
function App() {

  const [add , addcount] = useState(0)

  const handleAdd = ()=>{
  
    addcount(add+1)

  }

  return (
    <>
   
       <BrowserRouter>
       <Header add={add}></Header>
      <Routes>
        <Route path='/' element={<Home handleAdd={handleAdd}/>}></Route>
        <Route path='aboutus' element={<AboutUs/>}></Route>
        <Route path='ourfood' element={<OurFood/>}></Route> 
        <Route path='signin' element={<SignIn/>}></Route>
      </Routes>
      <Footer></Footer>
      </BrowserRouter>
      
   
    </>
  )
}

export default App
