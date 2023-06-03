import React, { useEffect, useState } from 'react';
import axios from '../../API';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        '/products/category/jewelery'
      );
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
    <div className='products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {products.map((product, index) => (
        <div
          className='product-card bg-white p-4 rounded-lg shadow-md'
          key={index}
        >
          <h3 className='text-lg font-bold mb-2'>
            {product.title}
          </h3>
          <img
            src={product.image}
            alt='image'
            className='w-full'
          />
          <div className='price'>${product.price}</div>
          <div className='rating'>
            Ratings: <span>{product.rating.rate}</span>
            <br />
            Reviewed by{' '}
            <span className='count'>
              {product.rating.count}
            </span>{' '}
            People
          </div>
          <button
            className='bg-gray-700 mr-6 sm:mr-8 lg:mr-10 text-white rounded-md mb-2 px-2 py-1'
            style={{ cursor: 'pointer' }}
            onClick={(e) => HandleClick(product)}
          >
            {' '}
            See Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
