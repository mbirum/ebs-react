import React, { useState, useEffect } from 'react';
import './css/StoreSidebar.css';

const StoreSidebar = props => {
  const [uniqueCategories, setUniqueCategories] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');

  function onCategoryClick(e) {
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
      if (elements[i].innerHTML == props.currentCategory) {
        clickCategoryItem(elements[i]);
      }
    };
  }

  useEffect(() => {
    var categories = [];
    categories.push(<div key={i} className="sidebar-item sidebar-category" onClick={onCategoryClick}>All</div>);
    for (var i = 0; i < props.categoryStrings.length; i++) {
      var cat = props.categoryStrings[i];
      categories.push(<div key={i} className="sidebar-item sidebar-category" onClick={onCategoryClick}>{cat}</div>);
    }
    setUniqueCategories(categories);

  }, [props.categoryStrings]);

  useEffect(() => {
    evaluateClickedCategoryItems();
  }, [uniqueCategories, props.currentCategory]);

  return (
    <div id="storeSidebar">
        <h4 className="sidebar-header">Categories</h4>
        <hr/>
        {uniqueCategories}
    </div>
  );
}

export default StoreSidebar;