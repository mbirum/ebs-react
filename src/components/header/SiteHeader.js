import React from 'react';
import './css/SiteHeader.css';
import SiteBranding from './SiteBranding';
import SiteNavigation from './SiteNavigation';

const SiteHeader = props => {
    return (
        <header id="siteHeader" className="site-header" role="banner">
            <SiteBranding/>
            <SiteNavigation/>
        </header>
    );
};

export default SiteHeader;