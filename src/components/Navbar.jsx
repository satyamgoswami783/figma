import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-20 bg-gray-900 flex items-center justify-between px-12 text-white">
      {/* Logo */}
    
        <span className="font-extrabold text-2xl">Furniro</span>
      

      {/* Navigation Links */}
      <ul className="flex space-x-8 font-medium">
        <Link to={'/'} className="hover:underline hover:underline-offset-4 hover:text-gray-400 transition-colors duration-300">Home</Link>
        <Link to={'/shop'} className="hover:underline hover:underline-offset-4 hover:text-gray-400 transition-colors duration-300">Shop</Link>
        <Link to={'/about'} className="hover:underline hover:underline-offset-4 hover:text-gray-400 transition-colors duration-300">About</Link>
        <Link to={'/contact'} className="hover:underline hover:underline-offset-4 hover:text-gray-400 transition-colors duration-300">Contact</Link>
      </ul>

      {/* Cart Icon */}
      <div className="flex">
        <Link to={'/cart'} className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300">
          <img width={20} className='invert' src="cart_icon.png" alt="" />
        </Link>
      </div>
    </div>
  )
}

export default Navbar