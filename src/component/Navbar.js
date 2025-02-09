import React from 'react'
import { Hamburger } from './Hamburger'

const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-between font-sans font-medium text-lg'>
        <div>
        <h2 className='text-white py-4 px-8'>Google Sheet</h2>
        </div>
        <ul className='hidden md:flex justify-end space-x-11 px-24 py-4 text-white'>
            <li className='underline underline-offset-8 decoration-2'>Home</li>
            <li><a href="#about" className='active:underline underline-offset-8 decoration-2'>About Us</a></li>
            <li><a href="#section" className='active:underline underline-offset-8 decoration-2'>Services</a></li>
            <li><a href="#contact" className='active:underline underline-offset-8 decoration-2'>Contact Us</a></li>
        </ul> 
        <Hamburger />   
    </nav>
    </div>
  )
}

export default Navbar
