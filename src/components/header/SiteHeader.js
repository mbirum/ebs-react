import React from 'react';
import SiteBranding from './SiteBranding';
import SiteNavigation from './SiteNavigation';
import './css/SiteHeader.css';
import './css/SiteHeader-700.css';

const SiteHeader = props => {
    return (
        <header id="siteHeader" className="site-header" role="banner">
            <SiteBranding/>
            <SiteNavigation/>
        </header>
    );
};

export default SiteHeader;