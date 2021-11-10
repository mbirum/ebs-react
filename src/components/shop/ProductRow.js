import React, { useState, useEffect } from 'react';
import ProductTableItem from './ProductTableItem';
import './css/ProductRow.css';

const ProductRow = props => {

  var rowItems = [];
  for (var i = 0; i < props.items.length; i++) {
    rowItems.push(
      <ProductTableItem 
        key={i} 
        {...props.items[i]}
      />
    );
  };
  return (
    <tr>
      {rowItems}
    </tr>
  );
}

export default ProductRow;