import React, { useState, useEffect } from 'react';
import { useLocation, Link, Outlet } from 'react-router-dom';
import './css/ProductPage.css';

const ProductPage = props => {
    const location = useLocation();
    const { id } = location.state;

    return (
        <div>
            hello! {id}

            <Outlet />
        </div>

    );
}

export default ProductPage;