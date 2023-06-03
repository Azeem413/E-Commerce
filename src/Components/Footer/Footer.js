import React from 'react';

const Footer = () => {
  return (
    <footer className='footer bg-gray-800 text-white'>
      <div className='container py-8'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='company'>
            <h5 className='text-lg font-semibold mb-4'>
              Company
            </h5>
            <ul className='footer-links'>
              <li>
                <a href='#'>About Us</a>
              </li>
              <li>
                <a href='#'>Contact Us</a>
              </li>
            </ul>
          </div>
          <div className='company'>
            <h5 className='text-lg font-semibold mb-4'>
              Categories
            </h5>
            <ul className='footer-links'>
              <li>
                <a href='#'>Electronics</a>
              </li>
              <li>
                <a href='#'>Fashion</a>
              </li>
              <li>
                <a href='#'>Home &amp; Garden</a>
              </li>
            </ul>
          </div>
          <div className='company'>
            <h5 className='text-lg font-semibold mb-4'>
              Customer Service
            </h5>
            <ul className='footer-links'>
              <li>
                <a href='#'>Shipping &amp; Returns</a>
              </li>
              <li>
                <a href='#'>Terms &amp; Conditions</a>
              </li>
              <li>
                <a href='#'>Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='footer-bottom bg-gray-900 py-4'>
        <div className='container'>
          <p className='text-center text-gray-300'>
            &copy; 2023 E-Commerce Store. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
