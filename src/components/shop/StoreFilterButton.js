import React from 'react';
import './css/StoreFilterButton.css';
import './css/StoreFilterButton-700.css';

const StoreFilterButton = props => {

    var FILTER_BUTTON_CLICKED = 'filter-button-clicked';
    var FORCE_BLOCK_DISPLAY = 'force-block-display';

    function getFilterButton() {
        return document.getElementById("storeFilterButton");
    }

    function getSidebar() {
        return document.getElementById("storeSidebar");
    }

    function toggleSidebarOn() {
        getFilterButton().classList.add(FILTER_BUTTON_CLICKED);
        getSidebar().classList.add(FORCE_BLOCK_DISPLAY);
    }

    function toggleSidebarOff() {
        getFilterButton().classList.remove(FILTER_BUTTON_CLICKED);
        getSidebar().classList.remove(FORCE_BLOCK_DISPLAY);
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