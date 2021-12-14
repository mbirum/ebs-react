import './css/CheckoutPay.css';
import './css/CheckoutPay-700.css';
import React, { useEffect } from 'react';

const CheckoutPayment = props => {

    useEffect(() => {
        document.getElementById('cart').classList.add('cart-permanent');
        document.getElementById('site-footer').classList.add('checkout-footer');
        return () => {
            document.getElementById('cart').classList.remove('cart-permanent');
            document.getElementById('site-footer').classList.remove('checkout-footer');
        };
    });

    return (
        <div id="checkoutPay">HELLO!</div>
    );
};

export default CheckoutPayment;