import React from 'react';
import './css/SiteNavigation.css';
import {Link} from 'react-router-dom';

const SiteNavigation = props => {
    return (
        <nav id="site-navigation" className="main-navigation" role="navigation">
            <button className="menu-toggle" aria-controls="primary-menu" >Menu</button>
            <div className="primary-menu">
                <ul id="primary-menu" className="menu nav-menu">
                    <li className="nav-item nav-item-has-children">
                        <Link to="/shop" state={{ initialCategory: "All" }} className="nav-item-link">Shop</Link>
                        <ul className="sub-menu">
                            <Link to="/shop" state={{ initialCategory: "All" }}><li className="nav-sub-item">All Products</li></Link>
                            <Link to="/shop" state={{ initialCategory: "Prints" }}><li className="nav-sub-item">Prints</li></Link>
                            <Link to="/shop" state={{ initialCategory: "Ornaments" }}><li className="nav-sub-item">Ornaments</li></Link>
                            <Link to="/shop" state={{ initialCategory: "Wildflowers" }}><li className="nav-sub-item">Wildflowers</li></Link>
                            <Link to="/shop" state={{ initialCategory: "Inspiration" }}><li className="nav-sub-item">Inspiration</li></Link>
                            <Link to="/shop" state={{ initialCategory: "Small Things" }}><li className="nav-sub-item">Small Things</li></Link>
                        </ul>
                    </li>
                    <li className="nav-item menu-item-type-post_type menu-item-object-page">
                        <Link to="shop" className="nav-item-link">Contact</Link>
                    </li>
                    <li className="nav-item menu-item-type-post_type menu-item-object-page">
                        <Link to="/shop" className="nav-item-link">About</Link>
                    </li>
                    <li className="nav-item wpmenucartli wpmenucart-display-standard menu-item" id="wpmenucartli">
                        <Link id="nav-cart-link" className="wpmenucart-contents empty-wpmenucart-visible" to="/shop">
                            <img alt="Cart" id="nav-cart-img" src="../cart.png" />
                            <span className="cartcontents">0</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default SiteNavigation;