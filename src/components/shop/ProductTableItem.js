import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/ProductTableItem.css';
import './css/ProductTableItem-700.css';

const ProductTableItem = props => {

  return (
      <td className="ProductTableItem">
        <Link to="/shop/Winter-Greens" state={{id: props.id}}>
          <img src={props.image} className="product-table-image" />
        </Link>
          <p>
            {props.name} <br/>
            {props.price}
          </p>
      </td>
  );
}

export default ProductTableItem;