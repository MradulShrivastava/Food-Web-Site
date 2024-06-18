import React from 'react'
import { toppicks } from './Data/Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


function Topicks({handleAdd}) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
   <>

    <div className='w-[90%] mx-auto'>

      <h1 className='text-black text-xl font-bold pl-6 pt-30  '>What's on your mind?</h1>
        <div className='py-20'>
        <Slider {...settings}>
        {
     toppicks.map((item  )=>(
 <div className='bg-white rounded-md' key={item.id}>
    
        <div className=' flex justify-center  '>
            <img src={item.img} alt="" className='w-[200px] h-[200px] rounded-full object-cover'/>
        </div>
       
        <div className='flex flex-col  justify-center items-center gap-3 p-4'>
        <p className='text-xl font-semibold uppercase'>{item.title}</p>
        <p className=' text-blackfont-semibold uppercase'>{item.price}</p>
            <button onClick={handleAdd} className='bg-black text-white  rounded-md h-[40px] w-[110px] my-6  py[10px] text-[15px] font-semibold uppercase'>Add To Cart</button>
       
    </div>
 </div>

     ))
    }
    </Slider>
    </div>
     </div>

   
     </>
  )
}

export default Topicks
