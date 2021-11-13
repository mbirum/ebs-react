import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import StoreBreadcrumb from './StoreBreadcrumb';
import './css/ProductPage.css';
import './css/ProductPage-700.css';

const ProductPage = props => {
    const location = useLocation();
    const { id, name, image, price, description, width, height, quantity, currentCategory } = location.state;
    var productCategory = (currentCategory != null) ? currentCategory : 'All';

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
                                <div className="product-description-line product-buy-section">
                                    <input className="product-quantity-dropdown" type="number" name="quantity" value="1" min="1" max={quantity} />
                                    <div className="product-buy-button ebs-button">Add to cart</div>
                                </div>
                                <span className="product-description-line product-size">{width} x {height} inches</span>
                                <span className="product-description-line product-description">{description}</span>
                                
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ProductPage;