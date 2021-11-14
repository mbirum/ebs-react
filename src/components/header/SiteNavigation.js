import React from 'react';
import {Link} from 'react-router-dom';
import './css/SiteNavigation.css';
import './css/SiteNavigation-700.css';

const SiteNavigation = props => {

    var FORCE_BLOCK_DISPLAY = 'force-block-display';
    var MENU_TOGGLE_CLICKED = 'menu-toggle-clicked';
    var SITE_NAVIGATION_ENABLED = 'site-navigation-enabled';
    var PREVENT_SCROLL = 'prevent-scroll';

    function getBody() {
        return document.getElementsByTagName("body")[0];
    }

    function getMenuToggle() {
        return document.getElementById('menuToggle');
    }

    function getSiteNavigation() {
        return document.getElementById("siteNavigation");
    }

    function isNavigationOn() {
        return getMenuToggle().classList.contains(MENU_TOGGLE_CLICKED);
    }

    function toggleNavigationOn() {
        getMenuToggle().classList.add(MENU_TOGGLE_CLICKED);
        getBody().classList.add(PREVENT_SCROLL);
        getSiteNavigation().classList.add(FORCE_BLOCK_DISPLAY);
        getSiteNavigation().classList.add(SITE_NAVIGATION_ENABLED);
    }

    function toggleNavigationOff() {
        getMenuToggle().classList.remove(MENU_TOGGLE_CLICKED);
        getBody().classList.remove(PREVENT_SCROLL);
        getSiteNavigation().classList.remove(FORCE_BLOCK_DISPLAY);
        getSiteNavigation().classList.remove(SITE_NAVIGATION_ENABLED);
    }

    function toggleSiteNavigation() {
        if (isNavigationOn()) {
            toggleNavigationOff();
        }
        else {
            toggleNavigationOn();
        }
    }

    function onNavigationClick() {
        if (isNavigationOn()) {
            toggleNavigationOff();
        }
    }

    return (
        <>
            <button id="menuToggle" className="menu-toggle ebs-button" onClick={toggleSiteNavigation} >&#x2630;</button>
            <nav id="siteNavigation" className="main-navigation" role="navigation" onClick={onNavigationClick}>
                <div className="primary-menu">
                    <ul id="primary-menu" className="menu nav-menu">
                        <li id="shopNavItem" className="nav-item nav-item-has-children">
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
        </>
    );
};

export default SiteNavigation;