import React from 'react';
import Navbar from './Pages/Navbar/Navbar';
import Slider from './Components/Slider/Slider';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Pages/Home/Home';
import SingleProduct from './Pages/SingleProduct/SingleProduct';
import Products from './Pages/Products/Products';
import Electronics from './Components/AllCategories/Electronics';
import Jewelery from './Components/AllCategories/Jewelery';
import MensCloth from './Components/AllCategories/MensCloth';
import WomensCloth from './Components/AllCategories/WomensCloth';
import Footer from './Components/Footer/Footer';
import Contact from './Pages/Contact/Contact';

function App() {
  return (
    <div>
      <Navbar />

      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route
            path='singleproduct'
            element={<SingleProduct />}
          />
          <Route path='products' element={<Products />} />
          <Route path='electronics' element={<Electronics />} />
          <Route path='jewelery' element={<Jewelery />} />
          <Route path='menscloth' element={<MensCloth />} />
          <Route path='womenscloth' element={<WomensCloth />} />
          <Route path='contact' element={<Contact />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
