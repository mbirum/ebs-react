import React from 'react';
import './css/Homepage.css';
import Carousel from './Carousel'
import ShopButtonSection from './ShopButtonSection';

function Homepage() {

  return (
    <div id="homepage">
      
      <img id="homepage-image" src="homepage.png" />

      <ShopButtonSection/>

      <Carousel/>

    </div>
  );
}

export default Homepage;