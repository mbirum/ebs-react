import './css/Cart.css';
import './css/Cart-700.css';
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import PanelCloser from '../utility/PanelCloser';
import { getProduct } from '../../graphql/queries';

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

    async function fetchProducts(products) {
        var cartItems = [];
        for (var i = 0; i < products.length; i++) {
            const apiData = await API.graphql({ query: getProduct, variables: {id : products[i].id} });
            const item = apiData.data.getProduct;
            cartItems.push(
                <tr key={i} className='cart-item'>
                    <td className='cart-item-column cart-img-column'>
                        <img className='cart-item-img' src={item.image}/>
                    </td>
                    <td className='cart-item-column cart-text-column'>
                        <h3 className='cart-text-header'>{item.name}asdfasdfasfasfasdfasdf</h3>
                        <span className='cart-item-price'>${item.price}</span>
                        <input className="cart-quantity-dropdown" type="number" name="quantity" defaultValue={products[i].quantity} min="0" max={item.quantity} />
                    </td>
                </tr>
            );
        }
        
        setItems(cartItems);
    }

    useEffect(() => {
        fetchProducts(props.items);
    }, [props.items]);


    return (
        <div id="cart">
            <PanelCloser onClick={closeCart}/>
            <div id="cartHeader">Shopping cart</div>
            <br/>
            <hr/>
            <table id="cartTable">
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    );
};

export default Cart;