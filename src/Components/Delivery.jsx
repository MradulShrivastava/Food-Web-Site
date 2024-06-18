import React from 'react'

function Delivery() {
  return (
   <>
   <div>
   <div className='w-full text-center text-2xl text-yellow-400 font-semibold'>

<h3 className='m-5'>Quick Delivery</h3>

</div>
<div  className='grid grid-cols-2 w-[70%] mx-auto gap-20 my-5'>
<div>
<img className='w-[500px]  h-[80vh] object-cover rounded-2xl' src="https://png.pngtree.com/thumb_back/fh260/background/20220204/pngtree-big-isolated-motorcycle-vector-colorful-icons-flat-illustrations-of-delivery-by-image_984801.jpg" alt="" />
</div>
<div className='flex flex-col justify-center'>
    <p className='text-green-700 font-semibold text-3xl my-3'>Get The App</p>
    <h2 className='text-black font-bold text-4xl'>The Fastest Food <br /> Delivery In India</h2>
    <button className='bg-black text-white text-xl rounded-md w-28 my-5'>Get Started</button>
    </div>
</div>
   </div>
   
   
   
   
   </>
  )
}

export default Delivery
