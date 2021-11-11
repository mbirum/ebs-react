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
  while (rowItems.length < 3) {
    rowItems.push(<td className="ProductTableItem"></td>);
  }
  return (
    <tr>
      {rowItems}
    </tr>
  );
}

export default ProductRow;