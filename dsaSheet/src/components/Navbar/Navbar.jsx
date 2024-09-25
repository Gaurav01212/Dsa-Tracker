import React from 'react'
import './nav.css'

function Navbar() {
  return (
    <div className='w-full h-20 bg-[#4C4B16] text-center absolute top-0 flex justify-center items-center gap-2'>
        <h1 className='madimi-one-regular text-[3rem] '>DSA SHEET </h1><span className='bg-yellow-500 rounded-md text-[1.6rem] p-1 
       font-semibold pl-3 pr-3'>750</span>
    </div>
  )
}

export default Navbar