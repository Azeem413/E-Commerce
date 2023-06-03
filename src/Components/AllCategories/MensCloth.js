import React, { useEffect, useState } from 'react';
import axios from '../../API';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        `/products/category/men's clothing`
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
    <div className='products-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
      {products.map((product, index) => (
        <div className='product-card' key={index}>
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
            className='button bg-blue-500 text-white font-bold py-2 px-4 mt-4 rounded'
            style={{ cursor: 'pointer' }}
            onClick={(e) => HandleClick(product)}
          >
            See Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
