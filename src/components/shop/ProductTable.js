import React, { useState, useEffect } from 'react';
import ProductRow from './ProductRow';

const ProductTable = props => {

  var productsPerRow = 3;
  var tableRows = [];
  var currentRowItems = [];
  for (var i = 0; i < props.items.length; i++) {
    currentRowItems.push(props.items[i]);
    if (currentRowItems.length == productsPerRow) {
      var newRowItems = [];
      currentRowItems.forEach((rowItem)=> {
        newRowItems.push(rowItem);
      });
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
      {tableRows}
    </table>
  );
}

export default ProductTable;