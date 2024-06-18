import React, { useEffect, useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa";

function Hero() {

  const imgData = [
    
    {
      url: 'https://images.unsplash.com/photo-1577859714523-5f0b6c98ece7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1712652036447-52f5ee1acaa4?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      url: 'https://images.unsplash.com/photo-1584947479575-d03807482f2a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM3Nnx4alBSNGhsa0JHQXx8ZW58MHx8fHx8fd'
    },
  ]

  const [slider , setslider] = useState(0)

  const handleplus = ()=>{
  setslider(slider===imgData.length-1 ? 0:slider+1)
  };

  const handleminus = ()=>{
setslider(slider===0 ? imgData.length-1:slider-1)

  };

  useEffect(()=>{
const sliderclear = setInterval(()=>{
handleplus();

},3000)

return()=>clearInterval(sliderclear)

  },[slider])


  return (
    <>
   <div>
      <div className='w-[90%] mx-auto h-[80vh] my-5 relative'>
    
    {
      imgData.map((item ,i )=>(

        <div key={i} className={`${slider ===i? "block":"hidden"}`}>
 <img className=' w-full  h-[80vh] object-cover rounded-2xl'  src={item.url} alt=""/>
 </div>
      ))}
      <div className='bg-black  w-full mx-auto h-[80vh] absolute top-0 left-0 opacity-50 rounded-2xl'></div>
      <div><p className='absolute top-[50%] text-white text-center w-full text-20px md:text-2xl font-semibold'>Welcome to the world of Tasty & Fresh <span className='text-[yellow]'>Food</span> </p></div>
      
      <div className='flex justify-between w-full px-5 absolute top-[50%] text-white'>
      <FaAngleLeft size={35} className='cursor-pointer' onClick={handleminus} />
      <FaChevronRight size={35} className='cursor-pointer' onClick={handleplus} />
      </div>
      </div>
      </div>
     

      
    </>
     )
    }
  


export default Hero
