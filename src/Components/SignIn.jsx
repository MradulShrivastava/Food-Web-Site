import React from 'react'

function SignIn() {
  return (
    <>
    <div className='w-[90%] mx-auto flex justify-center gap-36  items-center my-20  mt-[100px] '>
      <div className='lg:w-3/5'>
 <h1 className='text-black text-3xl font-bold capitalize'>Get Started With Your Account</h1>
 <p className='text-black capitalize'>find your favourite food on your platform . just one step to order your food</p>

      </div>

      <div className='bg-gray-100 py-5 px-6 mr-6 ' >

  <h3 className='text-xl capitalize font-semibold text-black py-4 '>Sign Up</h3>

<div className='relative mb-4'> <label htmlFor="full name">full name</label>
<input type="text"
 id='full name'  
 name='full name' 
 className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:rings-2 focus:ring-indigo-200  text-base outline-none 
 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ' />
</div>
<div className='relative mb-4'> <label htmlFor="Email">Email</label>
<input type="text"
 id='Email'  
 name='Email' 
 className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:rings-2 focus:ring-indigo-200  text-base outline-none 
 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ' />
</div>
<div className='relative mb-4'> <label htmlFor="Mobile">Mobile</label>
<input type="number"
 id='Mobile'  
 name='Mobile' 
 className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:rings-2 focus:ring-indigo-200  text-base outline-none 
 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ' />
</div>
<div className='relative mb-4'> <label htmlFor="">Password</label>
<input type="text"
 id='Password'  
 name='Password' 
 className='w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:rings-2 focus:ring-indigo-200  text-base outline-none 
 text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out ' />
</div>

<button className='bg-[blue] py-1 px-6 text-white w-[100%] rounded'>SingUp</button>

      </div>


      </div>
    
    </>
  )
}

export default SignIn
