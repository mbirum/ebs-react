import React, { useState, useEffect } from 'react';
import './css/Product.css';

const ProductTableItem = props => {

  return (
    <td className="ProductTableItem">
      <img src={props.image} className="product-table-image" />
      <p>
        {props.name} <br/>
        {props.price}
      </p>

    </td>
  );
}

export default ProductTableItem;