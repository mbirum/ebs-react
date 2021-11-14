import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProductTableItem.css';
import './css/ProductTableItem-700.css';

const ProductTableItem = props => {

  var isOutOfStock = (props.quantity < 1);
  var stockClass = (isOutOfStock) ? 'product-table-out-of-stock' : 'product-table-in-stock';

  return (
      <td className="ProductTableItem">
        <Link to={'/shop/' + props.name} state={{...props}}>
          <div className={"product-table-img-wrapper " + stockClass}>
            <img src={props.image} alt={props.name} className={"product-table-image " + stockClass} />
          </div>
          <p>
            {props.name} <br/>
            {props.price}
          </p>
        </Link>
      </td>
  );
}

export default ProductTableItem;