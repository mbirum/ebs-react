import './css/ProductTableItem.css';
import './css/ProductTableItem-700.css';
import React from 'react';
import { Link } from 'react-router-dom';


const ProductTableItem = props => {

  var isOutOfStock = (props.quantity < 1);
  var stockClass = (isOutOfStock) ? 'product-table-out-of-stock' : 'product-table-in-stock';

  return (
      <td className="ProductTableItem">
        <Link to={'/shop/' + props.slug} state={{...props}}>
          <div className={"product-table-img-wrapper " + stockClass}>
            <img src={props.image} alt={props.name} className={"ebs-image-shadow product-table-image " + stockClass} />
          </div>
          <div className="product-table-item-name">
            {props.name}
          </div>
          <div className="product-table-item-price">
            ${props.price}
          </div>
        </Link>
      </td>
  );
}

export default ProductTableItem;