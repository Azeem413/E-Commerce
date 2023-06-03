import axios from '../../API';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Products from '../Products/Products';

const SingleProduct = () => {
  const [singleproduct, setSingleproduct] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartProduct, setCartProduct] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const fetchProduct = async () => {
    const { state: product } = location;
    try {
      const response = await axios.get(
        `/products/${product.id}`
      );
      setSingleproduct(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const AddToCart = async () => {
    setCartCount(cartCount + 1);

    const currentTime = new Date();
    try {
      const response = await axios.post('/carts', {
        id: singleproduct.id,
        userId: currentTime,
        date: '5-24-2022',
        products: [
          { productId: singleproduct.id, quantity: cartCount },
        ],
      });
      console.log(response.data);
      setCartProduct([...cartProduct, response.data.products]);
      localStorage.setItem('cart', cartProduct);
      console.log(cartProduct);
    } catch (error) {
      console.log(error);
    }
    // console.log(response.data);

    // setCartProduct((prevCartProduct) => [
    //   ...prevCartProduct,
    //   response.data,
    // ]);

    // Will show the updated cartProduct state

    // navigate('/cart', { state: singleproduct });
  };
  const RemoveFromCart = () => {
    setCartCount(cartCount - 1);
  };
  const HandleCheckoutCart = () => {
    navigate('/cart');
  };
  const HandleBuyNow = () => {
    alert('We do not ship to your countery');
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div>
      {' '}
      <div className='flex ml-24'>
        <div className='flex-1/3'>
          {' '}
          <img
            className='aspect-h-1 cursor-pointer aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80'
            src={singleproduct.image}
            alt={singleproduct.title}
          />
        </div>
        <div className='ml-15 flex-1 ml-10'>
          <h3 className='text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl'>
            {singleproduct.title}
          </h3>
          <br />
          <button
            onClick={(e) => AddToCart(singleproduct)}
            className='bg-gray-700 text-white rounded-md mb-2 px-3 py-1'
          >
            Add to Card
          </button>

          <p className='text-bold'>
            Total Products in cart: {cartCount}
          </p>
          <button
            onClick={HandleCheckoutCart}
            className='bg-gray-700 text-white rounded-md mb-2 px-3 py-1'
          >
            Check out from cart
          </button>
          <br />
          {cartCount > 0 && (
            <button
              onClick={RemoveFromCart}
              className='bg-gray-700 text-white rounded-md mb-20 px-3 py-1'
            >
              Remove from Cart
            </button>
          )}
          <br />
          <button
            onClick={HandleBuyNow}
            className='bg-gray-700 text-white rounded-md mb-20 px-3 py-1'
          >
            Buy Now
          </button>
          <h5 className='text-3xl tracking-tight text-gray-900'>
            Price ${singleproduct.price}
          </h5>
          <p style={{ color: '#B5B6B6' }}>
            <b>Description:</b>
          </p>
          <p className='text-base text-gray-900'>
            {singleproduct.description}
          </p>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default SingleProduct;
