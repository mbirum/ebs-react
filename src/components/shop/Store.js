import React, { useState, useEffect } from 'react';
import './css/Store.css';
import ProductTable from './ProductTable';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('store useEffect');
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const apiData = await API.graphql({ query: listProducts, authMode: 'API_KEY' });
    setProducts(apiData.data.listProducts.items);
  }

  return (
    <div id="store">
      
      <ProductTable items={products} />

    </div>
  );
}

export default Store;