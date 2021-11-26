import './css/CartCheckoutSection.css';
import './css/CartCheckoutSection-700.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartCheckoutSection = props => {
    let navigate = useNavigate();

    function onCheckoutClick() {
        if (props.subtotal > 0) {
            navigate("/checkout", { replace: true });
            setTimeout(() => {
                document.getElementById('cart').classList.remove('cart-active');

            }, 200);
        }
    }

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
                <div id="cartCheckoutButton" onClick={onCheckoutClick} className="ebs-button">Checkout</div>
        </div>
    );
};

export default CartCheckoutSection;