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

Amplify.configure(amplifyconfig);

function App() {
  return (
    <BrowserRouter>

      <SiteHeader/>

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