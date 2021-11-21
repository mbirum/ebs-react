import './App.css';
import './App-700.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Amplify from '@aws-amplify/core';
import amplifyconfig from './amplify-config.js';
import Store from './components/store/Store';
import Homepage from './components/home/Homepage';
import SiteHeader from './components/header/SiteHeader';
import SiteFooter from './components/footer/SiteFooter';
import ScrollToTop from './components/utility/ScrollToTop';
import ScrollListener from './components/utility/ScrollListener';
import ProductPage from './components/store/ProductPage';
import Cart from './components/cart/Cart';

Amplify.configure(amplifyconfig);

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(item) {
    let newItems = cartItems.map(ci => (ci));
    newItems.push(item);
    setCartItems(newItems);
  }

  return (
    <BrowserRouter>

      <SiteHeader cartSize={cartItems.length}/>

      <Cart items={cartItems}/>

      <ScrollListener 
        elementId='siteHeader'
        className='sticky-header'
      />

      <ScrollListener 
        elementId='root'
        className='sticky-root'
      />

      <ScrollToTop>
        <Routes>
          <Route exact path='/' element={<Homepage/>} />
          <Route path='/shop' element={<Store />} />
          <Route path='/shop/:product' element={<ProductPage addToCart={addToCart}/>} />
        </Routes>
      </ScrollToTop>

      <SiteFooter/>

    </BrowserRouter>
  );
}

export default App;