import './css/StoreFilterButton.css';
import './css/StoreFilterButton-700.css';
import React from 'react';


const StoreFilterButton = props => {

    var FILTER_BUTTON_CLICKED = 'filter-button-clicked';
    var SIDEBAR_ENABLED = 'sidebar-enabled';
    var FORCE_TRANSPARENT_DISPLAY = 'force-transparent-display';
    var PREVENT_SCROLL = 'prevent-scroll';

    function getBody() {
        return document.getElementsByTagName("body")[0];
    }

    function getSiteHeader() {
        return document.getElementById("siteHeader");
    }

    function getFilterButton() {
        return document.getElementById("storeFilterButton");
    }

    function getSidebar() {
        return document.getElementById("storeSidebar");
    }

    function toggleSidebarOn() {
        getSidebar().classList.add(SIDEBAR_ENABLED);
        getBody().classList.add(PREVENT_SCROLL);
        // setTimeout(() => {
            getSiteHeader().classList.add(FORCE_TRANSPARENT_DISPLAY);
            getFilterButton().classList.add(FILTER_BUTTON_CLICKED);
        // }, 150);
    }

    function toggleSidebarOff() {
        getSiteHeader().classList.remove(FORCE_TRANSPARENT_DISPLAY);
        getFilterButton().classList.remove(FILTER_BUTTON_CLICKED);
        getSidebar().classList.remove(SIDEBAR_ENABLED);
        getBody().classList.remove(PREVENT_SCROLL);
    }

    function isSidebarOn() {
        return getFilterButton().classList.contains(FILTER_BUTTON_CLICKED);
    }

    function toggleStoreFilter() {
        if (isSidebarOn()) {
            toggleSidebarOff();
        }
        else {
            toggleSidebarOn();
        }
        
    }

    return (
    <div id="storeFilterButton" className="ebs-button" onClick={toggleStoreFilter}>
        <span id="storeFilterButtonContent">Categories</span>
    </div>
    );

}

export default StoreFilterButton;