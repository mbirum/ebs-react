import './css/CheckoutPage.css';
import './css/CheckoutPage-700.css';
import React from 'react';
import CheckoutInfo from './CheckoutInfo';

const CheckoutPage = props => {

    return (
        <div id="checkoutPageWrapper">
            <CheckoutInfo />
        </div>
    );
};

export default CheckoutPage;