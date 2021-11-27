import './css/ProductPage.css';
import './css/ProductPage-700.css';
import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import { useLocation, Link } from 'react-router-dom';
import StoreBreadcrumb from '../store/StoreBreadcrumb';
import QuantityPicker from '../utility/QuantityPicker';
import ShippingAndTerms from './ShippingAndTerms';
import ProductImage from './ProductImage';
import { listProducts } from '../../graphql/queries';


const ProductPage = props => {
    const location = useLocation();
    const [id, setId] = useState((location.state) ? location.state.id : '');
    const [name, setName] = useState((location.state) ? location.state.name : '');
    const [image, setImage] = useState((location.state) ? location.state.image : '');
    const [additionalImages, setAdditionalImages] = useState((location.state) ? location.state.additionalImages : '');
    const [price, setPrice] = useState((location.state) ? location.state.price : '');
    const [description, setDescription] = useState((location.state) ? location.state.description : '');
    const [width, setWidth] = useState((location.state) ? location.state.width : 0);
    const [height, setHeight] = useState((location.state) ? location.state.height : 0);
    const [quantity, setQuantity] = useState((location.state) ? location.state.quantity : 0);
    const [currentCategory, setCurrentCategory] = useState((location.state) ? location.state.currentCategory : '');

    const [defaultQuantity, setDefaultQuantity] = useState((quantity >= 1) ? 1: 0);
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

    async function loadProduct() {
        let slug = location.pathname.replace('/shop/', '');
        const apiData = await API.graphql({ query: listProducts, filter: {slug: {eq: slug}} });
        const newProduct = apiData.data.listProducts.items[0];
        if (newProduct) {
            setId(newProduct.id);
            setName(newProduct.name);
            setImage(newProduct.image);
            setAdditionalImages(newProduct.additionalImages);
            setPrice(newProduct.price);
            setDescription(newProduct.description);
            setWidth(newProduct.width);
            setHeight(newProduct.height);
            setQuantity(newProduct.quantity);
            setDefaultQuantity((newProduct.quantity >= 1) ? 1: 0);
            setSelectedQuantity((newProduct.quantity >= 1) ? 1: 0);
            setCurrentCategory('All');
        }
    }

    useEffect(() => {
        if (name === '') {
            loadProduct();
        }
    });

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
                            <td className="product-page-column image-column">
                                <ProductImage
                                    alt={name}
                                    image={image}
                                    additionalImages={additionalImages}
                                />
                            </td>
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