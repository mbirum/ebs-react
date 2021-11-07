import React from 'react';
import {Link} from 'react-router-dom';
import './css/ShopButtonSection.css';

const ShopButtonSection = props => {
    return (
        <div id="home-button-section">
            <div id="button-section-content">
                <Link to="/shop"><div id="home-shop-button" className="ebs-button">Shop</div></Link>
                <div id="button-section-header">Original Artwork</div>
            </div>
        </div>
      );
};

export default ShopButtonSection;