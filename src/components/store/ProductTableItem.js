import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProductTableItem.css';
import './css/ProductTableItem-700.css';

const ProductTableItem = props => {

  return (
      <td className="ProductTableItem">
        <Link to={'/shop/' + props.name} state={{...props}}>
          <img src={props.image} alt={props.name} className="product-table-image" />
        </Link>
          <p>
            {props.name} <br/>
            {props.price}
          </p>
      </td>
  );
}

export default ProductTableItem;