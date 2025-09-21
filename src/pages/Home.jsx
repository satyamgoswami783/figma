import React from 'react';
import { Link } from 'react-router-dom';


const HomePage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 w-full relative'>
      <img  className='opacity-45 w-full h-96' src="OIP.webp" alt="" />
      <div className='absolute gap-3'>
        <h1 className='text-5xl font-bold'>Welcome to Our Furniture Store!</h1>
        <p>Explore our wide range of products.</p>
        <Link to="/shop">
          <button className='mt-2 font-bold text-2xl flex gap-2'>Shop Now <img width={20} src="right_icon.png" alt="" /></button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;