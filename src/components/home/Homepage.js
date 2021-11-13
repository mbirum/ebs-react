import React from 'react';
import './css/Homepage.css';
import Carousel from './Carousel'
import ShopButtonSection from './ShopButtonSection';

function Homepage() {

  return (
    <div id="homepage">
      
      <img alt="Homepage" id="homepage-image" src="homepage.png" />

      <ShopButtonSection/>

      <Carousel
        imagesPerWindow={3}
        carouselClass='carousel-large'
      />

      <Carousel
        imagesPerWindow={1}
        carouselClass='carousel-mobile'
      />

    </div>
  );
}

export default Homepage;