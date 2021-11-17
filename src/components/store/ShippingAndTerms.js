import './css/ShippingAndTerms.css';
import './css/ShippingAndTerms-700.css';
import React from 'react';


const ShippingAndTerms = props => {

  function getShippingInfoContent() {
    var wrapper = document.getElementsByClassName('shipping-info-wrapper')[0];
    var header = wrapper.firstChild;
    var content = header.nextSibling;
    return content;
  }

  function getExpandableCaret() {
    return document.getElementsByClassName('expandable-caret')[0];
  }

  function isShippingInfoActive() {
    return getShippingInfoContent().classList.contains('shipping-info-content-active');
  }

  function toggleShippingInfoOn() {
    getShippingInfoContent().classList.remove('force-hidden-display');
    setTimeout(() => {
      getShippingInfoContent().classList.add('shipping-info-content-active');  
      getExpandableCaret().classList.add('expandable-caret-active');
    }, 100);
  }

  function toggleShippingInfoOff() {
    getShippingInfoContent().classList.remove('shipping-info-content-active');
  }

  function toggleShippingInfoContent() {
    if (isShippingInfoActive()) {
      toggleShippingInfoOff();
    }
    else {
      toggleShippingInfoOn();
    }
  }

  return (
      <>
      <div className="shipping-info-wrapper">
          <div className="shipping-info-header" onClick={toggleShippingInfoContent}>
            <span className="shipping-info-header-text">Shipping &amp; Delivery</span>
            <span className="expandable-caret"></span>
          </div>
          <div className="shipping-info-content force-hidden-display">
              <span>
                All items will definitely be delivered please trust me i will not doop you. Trust me.
                All items will definitely be delivered please trust me i will not doop you. Trust me.
                All items will definitely be delivered please trust me i will not doop you. Trust me.
                All items will definitely be delivered please trust me i will not doop you. Trust me.
              </span>
          </div>
      </div>
      </>
  );
}

export default ShippingAndTerms;