import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineShoppingCart,
} from 'react-icons/ai';
// import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(true);
  // const navigate = useNavigate();
  const handleClick = () => {
    setNav(!nav);
  };

  // const HandleHome = () => {
  //   navigate('/');
  // };
  // const HandleProducts = () => {
  //   navigate('/products');
  // };

  return (
    <div>
      <nav className='flex justify-center items-center h-24 max-w-[1240px] mx-auto p-5 pr-20'>
        <a href='/'>
          {' '}
          <img
            className='w-200 left-0 relative h-24'
            src='/images/lloo.jpg'
            alt='logo'
          />
        </a>
        <ul className='hidden  md:flex'>
          <a href='/'>
            {' '}
            <li className='font-bold p-4 text-black'>Home</li>
          </a>

          <a href='/products'>
            {' '}
            <li className='font-bold p-4 text-black'>
              Products
            </li>
          </a>
          <li className='relative group'>
            <div className='font-bold p-4 text-black'>
              Categories
            </div>
            <ul className='absolute left-0 mt-2 bg-gray-600 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
              <a href='electronics'>
                {' '}
                <li className='font-bold p-2'>
                  Electronics
                </li>{' '}
              </a>
              <a href='jewelery'>
                <li className='font-bold p-2'>Jewelery</li>
              </a>
              <a href='menscloth'>
                <li className='font-bold p-2'>Men's Cloths</li>
              </a>
              <a href='womenscloth'>
                {' '}
                <li className='font-bold p-2'>Women's Cloths</li>
              </a>
              {/* Add more subcategories as needed */}
            </ul>
          </li>
          <a href='/contact'>
            {' '}
            <li className='font-bold p-4 text-black'>About</li>
          </a>
          <a href='/contact'>
            <li className='font-bold p-4 text-black'>Contact</li>
          </a>
          <li className='p-4 w-full cursor-pointer'>
            <AiOutlineShoppingCart />
          </li>
        </ul>
        <div
          onClick={handleClick}
          className='text-black cursor-pointer block md:hidden'
        >
          {!nav ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
        <div
          className={`${
            !nav
              ? 'fixed left-5 top-20 w-[25%] right-20 h-full bg-gray-600 border border-gray-900 ease-in-out duration-500'
              : 'fixed -left-full'
          }`}
        >
          <ul className='pt-10 absolute uppercase bg-gray-600'>
            <li className='border-b border-gray-600 p-4 text-black'>
              Home
            </li>
            <li className='border-b border-gray-600 p-4 text-black'>
              Products
            </li>
            <li className='border-b border-gray-600 p-4 text-black'>
              Categories
            </li>
            <li className='border-b border-gray-600 p-4 text-black'>
              About
            </li>
            <li className='border-b border-gray-600 p-4 text-black'>
              Contact
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
