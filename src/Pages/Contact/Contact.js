import React from 'react';

const Contact = () => {
  return (
    <div className='px-5 py-16 w-full'>
      <div className='max-w-[1200px] max-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2'>
          <h1 className='md:text-3xl ms:text-2xl text-xl py-2'>
            Facing some problems? Please leave your eamil adress
            and we will reach you out !
          </h1>
          <p>Sign up to our news letter to stay up to date.</p>
        </div>
        <div className='py-5 px-5'>
          <input
            className='flex py-2 bg-white w-[300px] text-black mb-3 p-2 rounded mr-3 border'
            type='email'
            placeholder='Enter Email'
          />
          <button className='bg-green-500 font-bold  text-black rounded-md mb-3 px-6 py-2'>
            Notify me
          </button>
          <p>
            We care about your protection of data.
            <br /> Read our &nbsp;
            <span className='text-green-500 cursor-pointer'>
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
