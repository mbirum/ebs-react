import './css/Cart.css';
import './css/Cart-700.css';
import React, { useState, useEffect } from 'react';
import PanelCloser from '../utility/PanelCloser';
import QuantityPicker from '../utility/QuantityPicker';
import CartCheckoutSection from './CartCheckoutSection';
import { getProductByID } from '../../utils/APIWrapper';

const Cart = props => {
    const [items, setItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0.00);

    function onItemQuantityChange(oldValue, newValue, picker) {
        var itemTr = picker.closest('tr');
        var productId = itemTr.getAttribute('productid');
        if (newValue === 0) {
            setTimeout(() => {
                props.removeFromCart(productId);
            }, 300);
        }
        else {
            props.updateCartItemQuantity(productId, parseInt(newValue));
        }
    }

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
        let sum = 0;
        for (var i = 0; i < products.length; i++) {
            let item = await getProductByID(products[i].id);
            sum = sum + (parseInt(products[i].quantity) * parseFloat(item.price));
            cartItems.push(
                <tr productid={item.id} key={i} className='cart-item'>
                    <td className='cart-item-column cart-img-column'>
                        <img alt={item.name} className='cart-item-img' src={item.image}/>
                    </td>
                    <td className='cart-item-column cart-text-column'>
                        <h3 className='cart-text-header'>{item.name}</h3>
                        <span className='cart-item-price'>${item.price}</span>
                        <QuantityPicker id="cartItemQuantity" onChange={onItemQuantityChange} disabled={false} defaultValue={products[i].quantity} min={0} max={item.quantity} />
                    </td>
                    
                </tr>
            );
        }
        
        setItems(cartItems);
        setSubtotal(sum);
        setIndicator(cartItems.length);
    }

    function setIndicator(length) {
        var cartImages = document.getElementsByClassName('cart-image');
        for (var i = 0; i < cartImages.length; i++) {
            if (length > 0) {
                cartImages[i].classList.add('cart-filled');
            }
            else {
                cartImages[i].classList.remove('cart-filled');
            }
        }
    }

    useEffect(() => {
        fetchProducts(props.items);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.items]);


    return (
        <div id="cart">
            <PanelCloser onClick={closeCart}/>
            <div id="cartHeader">Shopping cart</div>
            <br/>
            <hr className="cart-header-hr"/>
            <table id="cartTable">
                <tbody>
                    {items}
                </tbody>
            </table>

            <CartCheckoutSection subtotal={subtotal}/>

        </div>
    );
};

export default Cart;