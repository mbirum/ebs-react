import React from 'react';
import './css/SiteNavigation.css';
import {Link} from 'react-router-dom';

const SiteNavigation = props => {
    return (
        <nav id="site-navigation" className="main-navigation" role="navigation">
            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Menu</button>
            <div className="primary-menu">
                <ul id="primary-menu" className="menu nav-menu" aria-expanded="false">
                    <li className="nav-item nav-item-has-children" aria-haspopup="true">
                        <Link to="/shop" className="nav-link">Shop</Link>
                        <ul className="sub-menu">
                            <li className="nav-sub-item"><Link to="/shop">All Products</Link></li>
                            <li className="nav-sub-item"><Link to="/shop">Prints</Link></li>
                            <li className="nav-sub-item"><Link to="/shop">Ornaments</Link></li>
                            <li className="nav-sub-item"><Link to="/shop">Wildflowers</Link></li>
                            <li className="nav-sub-item"><Link to="/shop">Inspiration</Link></li>
                            <li className="nav-sub-item"><Link to="/shop">Small Things</Link></li>
                        </ul>
                    </li>
                    <li className="nav-item menu-item-type-post_type menu-item-object-page">
                        <Link to="shop">Contact</Link>
                    </li>
                    <li className="nav-item menu-item-type-post_type menu-item-object-page">
                        <Link to="/shop">About</Link>
                    </li>
                    <li className="nav-item wpmenucartli wpmenucart-display-standard menu-item" id="wpmenucartli">
                        <Link id="nav-cart-link" className="wpmenucart-contents empty-wpmenucart-visible" to="/shop">
                            <img id="nav-cart-img" src="cart.png" />
                            <span className="cartcontents">0</span>
                        </Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    );
};

export default SiteNavigation;