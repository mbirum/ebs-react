import './css/ShippingAndTerms.css';
import './css/ShippingAndTerms-700.css';
import React from 'react';


const ShippingAndTerms = props => {

  return (
      <>
      <div className="shipping-info-wrapper">
          <div className="shipping-info-header">
            <span className="shipping-info-header-text">Shipping &amp; Delivery</span>
            <span className="expandable-caret">&#x2304;</span>
          </div>
          <div className="shipping-info-content">
              <span>All items will definitely be delivered please trust me i will not doop you. Trust me.</span>
          </div>
      </div>
      </>
  );
}

export default ShippingAndTerms;