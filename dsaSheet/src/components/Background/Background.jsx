import React from 'react'
import './style.css'
import bg from './image/bg.jpg'

function Background() {
  return (
    <div className='bg absolute top-0 h-full w-full' style={{ height: '100vw', width: '100vh', background: `url(${bg}) `,backgroundSize:'cover', overflow:'hidden' }}>


background
  
</div>

  )
}

export default Background