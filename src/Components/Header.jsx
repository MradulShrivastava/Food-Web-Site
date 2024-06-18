import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaCartPlus } from "react-icons/fa6";


function Header({add}) {
  
  return (
    <div className='sticky'>
     <div className=' flex justify-between py-[20px] px-[35px] text-[18px] font-semibold border-b'>
    <div className='px-[15px] text-2xl font-bold'><p>Yummy<span className='text-[hsla(60,100%,50%,1)]'>Food</span></p></div>
    <div className=''>
      <ul className='sm:flex  gap-4 cursor-pointer flex-col sm:flex-row absolute capitalize'>
        <Link className=' hover:text-yellow-600 ease-in-out border-l-rose-200 ' to='/'><li>Home</li></Link>
        <Link  className=' hover:text-yellow-600 ease-in-out border-l-rose-200 ' to='aboutus'><li>About Us</li></Link>
        <Link  className=' hover:text-yellow-600 ease-in-out border-l-rose-200 ' to='ourfood'><li>Our Food</li></Link>
        <Link  className=' hover:text-yellow-600 ease-in-out border-l-rose-200 ' to='signin'><li>SignIn</li></Link>
        
      </ul>
     
    </div>
    <div className='flex gap-3'>

      
      <div><p> {add}<FaCartPlus  size={30}  className='cursor-pointer'/></p></div> 
      
      
      
    </div>
    
    </div>

    </div>
  )
}

export default Header
