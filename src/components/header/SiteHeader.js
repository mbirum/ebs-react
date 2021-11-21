import './css/SiteHeader.css';
import './css/SiteHeader-700.css';
import React from 'react';
import SiteBranding from './SiteBranding';
import SiteNavigation from './SiteNavigation';

const SiteHeader = props => {
    return (
        <header id="siteHeader" className="site-header" role="banner">
            <SiteBranding/>
            <SiteNavigation cartSize={props.cartSize}/>
        </header>
    );
};

export default SiteHeader;