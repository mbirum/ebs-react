import './css/CartCheckout.css';
import './css/CartCheckout-700.css';
import React, { useState, useEffect } from 'react';

const CartCheckout = props => {

    return (
        <div id="cartCheckout">
            <hr/>
            <table id="subtotalTable">
                <tbody>
                    <tr>
                        <td className="subtotal-label-column">Subtotal:</td>
                        <td className="subtotal-value-column">${props.subtotal}</td>
                    </tr>
                </tbody>
            </table>
            <div id="cartCheckoutButton" className="ebs-button">Checkout</div>
        </div>
    );
};

export default CartCheckout;