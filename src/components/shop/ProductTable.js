import React from 'react';
import ProductRow from './ProductRow';
import './css/ProductTable.css';
import './css/ProductTable-700.css';

const ProductTable = props => {

  var productsPerRow = 3;
  var tableRows = [];
  var currentRowItems = [];
  for (var i = 0; i < props.items.length; i++) {
    currentRowItems.push(props.items[i]);
    if (currentRowItems.length === productsPerRow) {
      var newRowItems = currentRowItems.slice();
      tableRows.push(
        <ProductRow
          key={i}
          items={newRowItems}
        />
      );
      currentRowItems = [];
    }
  }
  if (currentRowItems.length > 0) {
    tableRows.push(
      <ProductRow
        key={tableRows.length}
        items={currentRowItems}
      />
    );
  }

  return (
    <table className="ProductTable">
      <tbody>
        {tableRows}
      </tbody>
    </table>
  );
}

export default ProductTable;