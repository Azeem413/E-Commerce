import React from 'react';

const FeaturedCategories = () => {
  return (
    <>
      <div className='featurecategory'>
        <h2 className='text-2xl ml-10 font-bold tracking-tight text-gray-900'>
          Featured Categories:
        </h2>
        <div className='container ml-8 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='category border shadow-2xl'>
            <a href='/electronics'>
              <img
                src='/images/electronics.jpeg'
                alt='electronics'
                className='w-full h-[204px] '
              />
            </a>
            <a href='/electronics' className='text-center'>
              <h5 className='text-lg font-bold mt-2'>
                Electronics
              </h5>
            </a>
          </div>
          <div className='category border shadow-2xl'>
            <a href='menscloth'>
              <img
                src='/images/menclothing.jpg'
                alt="Men's Clothing"
                className='w-full'
              />
            </a>
            <a href='menscloth' className='text-center'>
              <h5 className='text-lg font-bold mt-2'>
                Men's Clothing
              </h5>
            </a>
          </div>
          <div className='category border shadow-2xl'>
            <a href='womenscloth'>
              <img
                src='/images/womenclothing.jpg'
                alt="Women's Clothing"
                className='w-full'
              />
            </a>
            <a href='womenscloth' className='text-center'>
              <h5 className='text-lg font-bold mt-2'>
                Women's Clothing
              </h5>
            </a>
          </div>
          <div className='category border shadow-2xl'>
            <a href='jewelery'>
              <img
                src='/images/jewelery.jpg'
                alt='Jewelry'
                className='w-full'
              />
            </a>
            <a href='jewelery' className='text-center'>
              <h5 className='text-lg font-bold mt-2'>Jewelry</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedCategories;
