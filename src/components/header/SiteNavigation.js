import React from 'react';

const SiteNavigation = props => {
    return (
        <nav id="site-navigation" className="main-navigation" role="navigation">
            <button className="menu-toggle" aria-controls="primary-menu" aria-expanded="false">Menu</button>
            <div className="primary-menu">
                <ul id="primary-menu" className="menu nav-menu" aria-expanded="false">
                    <li id="menu-item-1300" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-1300" aria-haspopup="true">
                        <a href="https://erinbirum.studio/product-category/originals/">Originals</a>
                        <ul className="sub-menu">
                            <li id="menu-item-2672" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2672"><a href="https://erinbirum.studio/product-category/originals/">All</a></li>
                            <li id="menu-item-2669" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2669"><a href="https://erinbirum.studio/product-category/originals/wildflowers/">Wildflowers</a></li>
                            <li id="menu-item-2670" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2670"><a href="https://erinbirum.studio/product-category/originals/inspiration/">Inspiration</a></li>
                            <li id="menu-item-2671" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-2671"><a href="https://erinbirum.studio/product-category/originals/small-things/">Small Things</a></li>
                        </ul>
                    </li>
                    <li id="menu-item-1301" className="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-1301">
                        <a href="https://erinbirum.studio/product-category/prints/">Prints</a>
                    </li>
                    <li id="menu-item-1000" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1000">
                        <a href="https://erinbirum.studio/commission/">Commissions</a>
                        </li>
                    <li id="menu-item-789" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-789">
                        <a href="https://erinbirum.studio/about/">About</a>
                        </li>
                    <li id="menu-item-1030" className="menu-item menu-item-type-post_type menu-item-object-page menu-item-1030">
                        <a href="https://erinbirum.studio/contact/">Contact</a>
                        </li>
                    <li className="menu-item wpmenucartli wpmenucart-display-standard menu-item" id="wpmenucartli">
                        <a id="nav-cart-link" className="wpmenucart-contents empty-wpmenucart-visible" href="https://erinbirum.studio/product-category/originals/" >
                            <img id="nav-cart-img" src="cart.png" />
                            <span className="cartcontents">0</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default SiteNavigation;