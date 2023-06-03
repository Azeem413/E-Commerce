import React from 'react';
import Products from '../Products/Products';
import Slider from '../../Components/Slider/Slider';
import FeaturedCategories from '../../Components/FeaturedCategories/FeaturedCategories';

const Home = () => {
  return (
    <div>
      <Slider />
      <FeaturedCategories />
      <Products />
    </div>
  );
};

export default Home;
