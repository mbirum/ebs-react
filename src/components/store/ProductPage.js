import './css/ProductPage.css';
import './css/ProductPage-700.css';
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import StoreBreadcrumb from './StoreBreadcrumb';
import ShippingAndTerms from './ShippingAndTerms';


const ProductPage = props => {
    const location = useLocation();
    const { id, name, image, price, description, width, height, quantity, currentCategory } = (location.state) ? location.state : {};
    var productCategory = (currentCategory != null) ? currentCategory : 'All';
    var defaultQuantity = (quantity >= 1) ? 1 : 0;
    var isOutOfStock = (quantity < 1);
    var stockMessage = (isOutOfStock) ? 'Sold out' : 'Available';
    var stockClass = (isOutOfStock) ? 'out-of-stock' : 'in-stock';

    function onBuyClick() {
        alert('hello');
    }

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
                                <div className="product-description-line product-buy-section">
                                    <input disabled={isOutOfStock} className="product-quantity-dropdown" type="number" name="quantity" defaultValue={defaultQuantity} min="0" max={quantity} />
                                    <span className={"product-stock " + stockClass}>{stockMessage}</span>
                                    <button className="product-buy-button ebs-button" disabled={isOutOfStock} onClick={onBuyClick}>Add to cart</button>
                                </div>
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