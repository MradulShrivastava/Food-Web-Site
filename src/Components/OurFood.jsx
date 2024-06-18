import React from 'react'
import { mealData } from './Data/Data'

function OurFood() {
  return (
    <>
    <div className='w-[90%] mx-auto '>

<div>
    <h2 className='text-center text-2xl text-yellow-300 font-bold uppercase py-5'>0ur food</h2>
</div>

<div className= 'grid sm:grid-cols-1 md:grid-cols-4 lg-grid-cols-4 gap-5'>
{
mealData.map((food)=>(
<div >
<img src={food.image} alt="" className='object-cover' />
<div className='flex  justify-center py-2 px-4 flex-col items-center'>
<p className='text-center text-[18px] font-bold text-black uppercase'>{food.title}</p>
<button className='bg-black hover:text-yellow-300 border-[2px] text-white  rounded-md h-[40px] w-[110px] my-6  py[10px] text-[15px] font-semibold uppercase'>Add To Cart</button>
       
</div>
</div>


))}





</div>


    </div>
    
    
    </>
  )
}

export default OurFood
