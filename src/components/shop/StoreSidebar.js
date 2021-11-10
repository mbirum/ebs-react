import React, { useState, useEffect } from 'react';
import './css/StoreSidebar.css';

const StoreSidebar = props => {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  function onCategoryClick(e) {
    var category = e.target.innerHTML;
    
    var elements = document.getElementsByClassName('sidebar-category');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove('sidebar-category-clicked');
    };
    e.target.classList.add('sidebar-category-clicked');
    props.onUpdate(category);
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

  return (
    <div id="storeSidebar">
        <h4 className="sidebar-header">Categories</h4>
        <hr/>
        {uniqueCategories}
    </div>
  );
}

export default StoreSidebar;