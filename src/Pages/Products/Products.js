import React, { useEffect, useState } from 'react';
import axios from '../../API';
// import '../../Styles/Products.css';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/products');
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const HandleClick = (product) => {
    navigate('/singleproduct', { state: product });
  };

  return (
    <div className='bg-white'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
          Trending Products:
        </h2>

        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='group border py-4 px-4 rounded-xl shadow-2xl w-100 h-30 relative'
            >
              <div className='aspect-h-1 cursor-pointer aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'>
                <img
                  src={product.image}
                  alt='image'
                  className='h-full w-full object-cover object-center lg:h-full lg:w-full'
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <h3 className='text-sm mb-5 font-bold cursor-pointer text-gray-700'>
                    <a href={product.href}>
                      {/* <span
                        aria-hidden='true'
                        className='absolute inset-0'
                      /> */}
                      {product.title}
                    </a>
                  </h3>
                  {/* <p className='mt-1 text-sm text-gray-500'>
                    {product.color}
                  </p> */}
                </div>
                <p className='text-sm font-medium text-gray-900'>
                  ${product.price}
                </p>
              </div>
              <div className='flex '>
                <button
                  className='bg-gray-700 mr-6 sm:mr-8 lg:mr-10 text-white rounded-md mb-2 px-2 py-1'
                  onClick={(e) => HandleClick(product)}
                >
                  See Detail
                </button>
                <button className='bg-gray-700 text-white rounded-md mb-2 ml-2 px-3 py-1'>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
