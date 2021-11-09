import React, { useState, useEffect } from 'react';
import './css/StoreSidebar.css';

const StoreSidebar = props => {
  const [uniqueCategories, setUniqueCategories] = useState([]);

  useEffect(() => {
    var categoryStrings = [];
    var categories = [];
    for (var i = 0; i < props.products.length; i++) {
      var productCategories = props.products[i].categories;
      if (productCategories && productCategories.length > 0) {
        productCategories.split(',').forEach(function(pc) {
          if (!categoryStrings.includes(pc)) {
            categoryStrings.push(pc);
            categories.push(<div className="sidebar-item">{pc}</div>);
          }
        });
      }

      
    }
    setUniqueCategories(categories);
  }, [props.products]);

  return (
    <div id="storeSidebar">
        <h3 className="sidebar-header">Categories</h3>
        <hr/>
        {uniqueCategories}
    </div>
  );
}

export default StoreSidebar;