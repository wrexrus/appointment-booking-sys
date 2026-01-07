import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between p-4 bg-white items-center'>
      <div className='flex items-center'>
        <img className='w-12 h-12 rounded-full' src="https://imgs.search.brave.com/F_cvQkPduvw28uV2_2cCbXAZDbgZyHEcVfeZSXuwhQM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvYWstc2lnbmF0/dXJlLWluaXRpYWwt/bG9nby10ZW1wbGF0/ZS12ZWN0b3Itc2ln/bmF0dXJlLWxvZ290/eXBlXzEwMDUzMjkt/MTcuanBnP3NlbXQ9/YWlzX2h5YnJpZCZ3/PTc0MCZxPTgw" alt="" />
        <h2 className='text-xl font-bold ml-1'>BookErase</h2>
      </div>
      <div className='flex gap-15'>
        <a href="#" className="hover:underline">Home</a>
        <a href="#services" className="hover:underline">Services</a>
        <a href="#book" className="hover:underline">Book Now</a>
        <a href="#about" className="hover:underline">About</a>
      </div>
      <div className='flex gap-6'>
        <Link to="#" className="hover:underline">Sign In</Link>
        <Link to="#" className="hover:underline">Get Started</Link>
      </div>
    </div>
  )
}

export default Navbar
