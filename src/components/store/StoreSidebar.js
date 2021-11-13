import React, { useState, useEffect } from 'react';
import './css/StoreSidebar.css';
import './css/StoreSidebar-700.css';

const StoreSidebar = props => {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  function hideSidebarIfFilterButton() {
    var filterButton = document.getElementById('storeFilterButton');
    if (filterButton.classList.contains('filter-button-clicked')) {
      var sidebar = document.getElementById('storeSidebar');
      var body = document.getElementsByTagName('body')[0];
      var siteHeader = document.getElementById('siteHeader');

      sidebar.classList.remove('force-block-display');
      filterButton.classList.remove('filter-button-clicked');
      body.classList.remove('prevent-scroll');
      siteHeader.classList.remove('force-hidden-display');
    }
  }

  function onCategoryClick(e) {
    hideSidebarIfFilterButton();
    clickCategoryItem(e.target);
    var category = e.target.innerHTML;
    props.onUpdate(category);
  }

  function clickCategoryItem(target) {
    var elements = document.getElementsByClassName('sidebar-category');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('sidebar-category-clicked');
    };
    target.classList.add('sidebar-category-clicked');
  }

  function evaluateClickedCategoryItems() {
    var elements = document.getElementsByClassName('sidebar-category');
    for (var i = 0; i < elements.length; i++) {
      if (elements[i].innerHTML === props.currentCategory) {
        clickCategoryItem(elements[i]);
      }
    };
  }

  useEffect(() => {
    var categories = [];
    var keyIndex = 0;
    categories.push(<div key={keyIndex} className="sidebar-item sidebar-category" onClick={onCategoryClick}>All</div>);
    keyIndex = keyIndex + 1;
    for (var i = 0; i < props.categoryStrings.length; i++) {
      var cat = props.categoryStrings[i];
      categories.push(<div key={keyIndex} className="sidebar-item sidebar-category" onClick={onCategoryClick}>{cat}</div>);
      keyIndex = keyIndex + 1;
    }
    setUniqueCategories(categories);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.categoryStrings]);

  useEffect(() => {
    evaluateClickedCategoryItems();
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uniqueCategories, props.currentCategory]);

  return (
    <div id="storeSidebar">
        <h4 className="ebs-header sidebar-header">Categories</h4>
        <hr/>
        <div id="sidebarItemWrapper">
          {uniqueCategories}
        </div>
    </div>
  );
}

export default StoreSidebar;