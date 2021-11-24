import './css/ProductPage.css';
import './css/ProductPage-700.css';
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import StoreBreadcrumb from './StoreBreadcrumb';
import QuantityPicker from '../utility/QuantityPicker';
import ShippingAndTerms from './ShippingAndTerms';


const ProductPage = props => {
    const location = useLocation();
    const { id, name, image, price, description, width, height, quantity, currentCategory } = (location.state) ? location.state : {};
    var defaultQuantity = (quantity >= 1) ? 1 : 0;
    const [selectedQuantity, setSelectedQuantity] = useState(defaultQuantity);
    var productCategory = (currentCategory != null) ? currentCategory : 'All';
    var isOutOfStock = (quantity < 1);
    var stockMessage = (isOutOfStock) ? 'Sold out' : 'Available';
    var stockClass = (isOutOfStock) ? 'out-of-stock' : 'in-stock';

    function registerBuyButtonMousedown() {
        var elements = document.getElementsByClassName('product-buy-button');
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener('mousedown', (e) => {
                e.target.classList.add('buy-button-clicked');
            });
            elements[i].addEventListener('mouseup', (e) => {
                setTimeout(() => {
                    e.target.classList.remove('buy-button-clicked');
                }, 100);
            });
        }
    }

    function onQuantityChange(oldValue, newValue) {
        setSelectedQuantity(newValue);
    }

    function addToCart(id, quantity) {
        if (quantity > 0) {
            props.addToCart(id, quantity);
        }
    }

    useEffect(registerBuyButtonMousedown);


    return (
        <div className="product-page">
            <StoreBreadcrumb
                inactiveCrumbs={[
                    <Link to="/shop" state={{ initialCategory: "All" }}>shop</Link>, 
                    <Link to="/shop" state={{ initialCategory: productCategory }}>{productCategory}</Link>
                ]}
            />

            <div className="product-wrapper">
                <table className="product-page-table">
                    <tbody>
                        <tr>
                            <td className="product-page-column image-column"><img alt={name} className="product-page-image" src={image} /></td>
                            <td className="product-page-column description-column">
                                <h4 className="product-header ebs-header">{name}</h4>
                                <span className="product-description-line product-price">${price}</span>
                                <span className="product-description-line product-size">{width} x {height} inches</span>
                                <span className="product-description-line product-description">{description}</span>
                                <span className={"product-stock " + stockClass}>{stockMessage}</span>
                                <QuantityPicker id="productPageQuantity" onChange={onQuantityChange} disabled={isOutOfStock} className="product-quantity-picker" defaultValue={defaultQuantity} min={1} max={quantity} />
                                <div className="product-description-line product-buy-section">
                                    <button className="product-buy-button ebs-button" disabled={isOutOfStock} onClick={() => addToCart(id, selectedQuantity)}>Add to cart</button>
                                </div>
                                <div className="cart-add-error-message"></div>
                                <ShippingAndTerms />
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ProductPage;