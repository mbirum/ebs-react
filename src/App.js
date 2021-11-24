import './App.css';
import './App-700.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Amplify from '@aws-amplify/core';
import { API } from 'aws-amplify';
import { getProduct } from './graphql/queries';
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

  async function getItemQuantity(id) {
    const apiData = await API.graphql({ query: getProduct, variables: {id} });
    const item = apiData.data.getProduct;
    return item.quantity;
  }

  async function addToCart(id, quantity) {
    let maxQuantity = await getItemQuantity(id);
    let newItems = [];
    let found = false;
    let valid = true;
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) { //item exists in cart already
        let hypotheticalNewQuantity = parseInt(cartItems[i].quantity) + parseInt(quantity);
        if (hypotheticalNewQuantity > maxQuantity) {
          valid = false;
          newItems.push(cartItems[i]);
          document.getElementsByClassName("cart-add-error-message")[0].innerHTML = 
            `You can't add more of this item to your cart`;
          setTimeout(() => {
            document.getElementsByClassName("cart-add-error-message")[0].innerHTML = '';
          }, 5000);
        }
        else {
          newItems.push({id, quantity: parseInt(cartItems[i].quantity) + parseInt(quantity)});
          found = true;
        }
      }
      else {
        newItems.push(cartItems[i]);
      }
    }
    if (!found && valid) {
      newItems.push({id, quantity});
    }

    setCartItems(newItems);
    
    if (valid) {
      setTimeout(() => {
        document.getElementById('cart').classList.add('cart-active');
    }, 400);
    }
  }

  async function updateCartItemQuantity(id, quantity) {
    let maxQuantity = await getItemQuantity(id);
    let newItems = [];
    for (var i = 0; i < cartItems.length; i++) {
      if (cartItems[i].id === id) {
        newItems.push({id, quantity});
      }
      else {
        newItems.push(cartItems[i]);
      }
    }
    setCartItems(newItems);
  }

  function removeFromCart(id) {
    let newItems = cartItems.filter(ci => (ci.id !== id));
    setCartItems(newItems);
  }

  function getCartSize() {
    var size = 0;
    for (var i = 0; i < cartItems.length; i++) {
      size = size + parseInt(cartItems[i].quantity);
    }
    return size;
  }

  return (
    <BrowserRouter>

      <SiteHeader cartSize={getCartSize()}/>

      <Cart items={cartItems} removeFromCart={removeFromCart} updateCartItemQuantity={updateCartItemQuantity}/>

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