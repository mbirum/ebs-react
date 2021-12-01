import './css/SiteSearch.css';
import './css/SiteSearch-700.css';
import PanelCloser from '../utility/PanelCloser';
import React from 'react';

const SiteSearch = props => {

    function closeSearch() {
        document.getElementById('siteSearchHeader').classList.remove('site-search-enabled');
    }

    function onSearchChange() {

    }

    return (
        <div id='siteSearchHeader'>
            
            <div id="siteSearchWrapper">
                <input id="siteSearchBar" onChange={onSearchChange} name="search" type="text" placeholder="Search..." />
            </div>

            <PanelCloser onClick={closeSearch}/>

        </div>
    );
};

export default SiteSearch;