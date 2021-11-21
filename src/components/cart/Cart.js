import './css/Cart.css';
import './css/Cart-700.css';
import React, { useState, useEffect } from 'react';
import PanelCloser from '../utility/PanelCloser';

const Cart = props => {
    const [items, setItems] = useState([]);

    function closeCart() {
        document.getElementById('cart').classList.remove('cart-active');
    }

    function registerMouseDownListener() {
        window.addEventListener('mousedown', (e) => {
            var cartElement = document.getElementById('cart');
            if (cartElement && cartElement.classList.contains('cart-active')) {
                var edge = cartElement.getBoundingClientRect().x;
                if (e.clientX < edge) {
                    closeCart();
                }
            }
        });
    }

    useEffect(registerMouseDownListener);

    useEffect(() => {
        var cartItems = [];
        var itemObjects = (props.items) ? props.items : [];
        for (var i = 0; i < itemObjects.length; i++) {
            cartItems.push(<div key={i} className='cart-item'>{itemObjects[i]}</div>);
        }
        setItems(cartItems);
    }, [props.items]);


    return (
        <div id="cart">
            <PanelCloser onClick={closeCart}/>
            <p>This is your shopping cart!</p><br/>
            {items}
        </div>
    );
};

export default Cart;