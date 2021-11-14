import './css/ProductRow.css';
import './css/ProductRow-700.css';
import React from 'react';
import ProductTableItem from './ProductTableItem';


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
  var tempIndex = props.items.length;
  while (rowItems.length < 3) {
    rowItems.push(<td key={tempIndex} className="ProductTableItem"></td>);
    tempIndex = tempIndex + 1;
  }
  return (
    <tr>
      {rowItems}
    </tr>
  );
}

export default ProductRow;