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
        getSiteHeader().classList.add(FORCE_TRANSPARENT_DISPLAY);
        getFilterButton().classList.add(FILTER_BUTTON_CLICKED);
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

    function updateStoreSort() {

    }

    return (
        <div id="storeFilterSection">
            <table id="storeFilterTable">
                <tbody>
                    <tr>
                        <td id="filterButtonColumn" className="filter-section-column">
                            <div id="storeFilterButton" className="ebs-button store-filter-element" onClick={toggleStoreFilter}>
                                <span id="storeFilterButtonContent">Categories</span>
                            </div>
                        </td>
                        <td id="storeSortColumn" className="filter-section-column">
                            <div id="storeSortDropdown" className="store-filter-element" onClick={updateStoreSort}>
                                <span>Most Recent</span>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );

}

export default StoreFilterButton;