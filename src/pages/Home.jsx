import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="relative w-full h-[90vh] flex items-center justify-center">
      <img 
        className="w-full h-full object-cover brightness-50" 
        src="home-photo.jpg" 
        alt="" 
      />
      <div className="absolute text-center text-white px-6 max-w-3xl">
        <h1 className="text-6xl font-extrabold drop-shadow-lg tracking-wide">
          Welcome to Our Furniture Store!
        </h1>
        <p className="mt-4 text-lg md:text-xl font-medium drop-shadow">
          Explore our wide range of products designed for your comfort.
        </p>
        <Link to="/shop">
          <button className="mt-6 px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-xl rounded-full flex items-center justify-center gap-3 shadow-lg transition duration-300">
            Shop Now 
            <img width={22} src="right_icon.png" alt="" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
