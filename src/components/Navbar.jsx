import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <div className="h-28 flex items-center justify-between px-8 ">
  {/* Logo */}
  <Link to={'/'} className=" items-center space-x-4 relative sm:block hidden">
    <img 
      width={130}
      src="https://static.vecteezy.com/system/resources/previews/014/372/038/original/luxury-letter-a-monoline-logo-free-vector.jpg"
      alt="FurniroLogo"
    />
    <span className="font-extrabold text-3xl absolute top-[25px] left-[95px]">Furniro</span>
  </Link>

  <ul className="flex space-x-6 font-semibold ">
    <Link to={'/'} className="hover:text-gray-300 cursor-pointer">Home</Link>
    <Link to={'/shop'} className="hover:text-gray-300 cursor-pointer">Shop</Link>
    <Link to={'/about'} className="hover:text-gray-300 cursor-pointer">About</Link>
    <Link to={'/contact'} className="hover:text-gray-300 cursor-pointer">Contact</Link>
  </ul>
  <div className='gap-4 flex'>
    <Link to={'/cart'}>
      <img width={30} src="cart_icon.png" alt="" />
    </Link>
  </div>
</div>

  )
}

export default Navbar
