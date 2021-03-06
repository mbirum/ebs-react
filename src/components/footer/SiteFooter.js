import './css/SiteFooter.css';
import './css/SiteFooter-700.css';
import React from 'react';

const SiteFooter = props => {
    return (
        <div id="site-footer">
            <a href="https://instagram.com/erinbirumstudio" className="fa fa-instagram">&nbsp;</a>
            <a href="https://www.facebook.com/ErinBirumStudios" className="fa fa-facebook">&nbsp;</a>
            <a href="https://pinterest.com" className="fa fa-pinterest">&nbsp;</a>
        </div>
    );
};

export default SiteFooter;