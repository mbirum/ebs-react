import './css/ShopButtonSection.css';
import './css/ShopButtonSection-700.css';
import React from 'react';
import { Link } from 'react-router-dom';


const ShopButtonSection = props => {
    return (
        <div id="home-button-section">
            <div id="button-section-content">
                <Link to="/shop" state={{initialCategory: "All"}}><div id="home-shop-button" className="ebs-button">Shop Now</div></Link>
                {/* <div id="button-section-header">Original Artwork</div> */}
            </div>
        </div>
      );
};



// const ShopButtonSection = props => {
//     return (
//         <div id="home-button-section">
//             <div id="button-section-content">
//                 <Link to="/shop" state={{initialCategory: "All"}}><div id="home-shop-button" className="ebs-button">Shop</div></Link>
//                 <div id="button-section-header">Original Artwork</div>
//             </div>
//         </div>
//       );
// };


export default ShopButtonSection;