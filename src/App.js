import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Amplify from '@aws-amplify/core';
import amplifyconfig from './amplify-config.js';
import Store from './components/shop/Store';
import Homepage from './components/home/Homepage';
import SiteHeader from './components/header/SiteHeader';
import SiteFooter from './components/footer/SiteFooter';
import ScrollToTop from './components/utility/ScrollToTop';
import ScrollListener from './components/utility/ScrollListener';

Amplify.configure(amplifyconfig);

function App() {

  return (
    <BrowserRouter>

      <SiteHeader/>

      <ScrollListener 
        elementId='masthead'
        className='sticky-header'
      />

      <ScrollListener 
        elementId='root'
        className='sticky-root'
      />

      <ScrollToTop>
        <Routes>
          <Route path='/shop' element={<Store/>} />
          <Route exact path='/' element={<Homepage/>} />
        </Routes>
      </ScrollToTop>

      <SiteFooter/>

    </BrowserRouter>
  );
}

export default App;