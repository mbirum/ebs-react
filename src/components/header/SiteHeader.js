import React from 'react';
import SiteBranding from './SiteBranding';
import SiteNavigation from './SiteNavigation';

const SiteHeader = props => {
    return (
        <header id="masthead" className="site-header" role="banner">
            <SiteBranding/>
            <SiteNavigation/>
        </header>
    );
};

export default SiteHeader;