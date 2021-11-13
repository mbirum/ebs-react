import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './css/ProductPage.css';
import StoreBreadcrumb from './StoreBreadcrumb';

const ProductPage = props => {
    const location = useLocation();
    const { id, name, image, price, currentCategory } = location.state;
    var productCategory = (currentCategory != null) ? currentCategory : 'All';

    return (
        <div className="product-page">
            <StoreBreadcrumb
                inactiveCrumbs={['shop', productCategory]}
                activeCrumb={name} 
            />

            <div className="product-wrapper">
                <img alt={name} className="product-page-image" src={image} />
            </div>

        </div>
    );
}

export default ProductPage;