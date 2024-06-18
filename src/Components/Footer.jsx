import React from 'react'

function Footer() {
  return (
  <>
  <div className='w-full'>
    <div className='bg-black text-gray-400 flex justify-around gap-6  py-7 list-none '>
        <div>
           <p className='text-white font-bold '>YUMMY<span className='text-[yellow]'>Food</span></p>
            <p className='text-gray-400'>© 2024 <br /> Bundl Technologies Pvt. Ltd</p>
        </div>
        <div>
          <h2 className='text-white'> <li>COMPANY</li></h2>
           <li>ABOUT</li>
           <li>CARRER</li>
           <li>TEAM</li>
           <li>YUMMY ONE</li>
           <li>YUMMY INSTAMART</li>
           <li>YUMMY GENIE</li>
        </div>
        <div>
            <h2 className='text-white text-25px'>CONTACT US</h2>
            <li>HELP AND SUPPORT</li>
            <li>PARTNER WITH US</li>
            <li>RIDE WITH US</li>
        </div>
        <div>
          <h2 className='text-white'> <li>WE DELIVER TO</li></h2>
           <li>Hyderabad</li>
           <li>Noida</li>
           <li>Bhopal</li>
           <li>Indore</li>
           <li>Pune</li>
           <li>Banglore</li>
        </div>
    </div>
  </div>
  </>
  )
}

export default Footer
