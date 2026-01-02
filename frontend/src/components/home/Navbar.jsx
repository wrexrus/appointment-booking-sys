import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-white text-center align-middle'>
      <h2 className='text-xl font-bold'>BookErase</h2>
      <div className='flex gap-15'>
        <Link to="#">Home</Link>
        <Link to="#">Services</Link>
        <Link to="#">Book Now</Link>
        <Link to="#">About</Link>
      </div>
      <div className='flex gap-6'>
        <Link to="#">Sign In</Link>
        <Link to="#">Get Started</Link>
      </div>
    </div>
  )
}

export default Navbar
