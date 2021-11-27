import './css/Homepage.css';
import './css/Homepage-700.css';
import React from 'react';
import Carousel from './Carousel'
import ShopButtonSection from './ShopButtonSection';
import HomepageTiles from './HomepageTiles';

function Homepage() {

  return (
    <div id="homepage">
      
      <img alt="Homepage" id="homepage-image" src="homepage.png" />

      <ShopButtonSection/>

      <Carousel
        imagesPerWindow={3}
        xPadding={7}
        carouselClass='carousel-large'
      />

      <Carousel
        imagesPerWindow={1}
        xPadding={25}
        carouselClass='carousel-mobile'
      />

      <HomepageTiles />

    </div>
  );
}

export default Homepage;