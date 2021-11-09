import React, { useState, useEffect } from 'react';
import './css/Store.css';
import ProductTable from './ProductTable';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import StoreBreadcrumb from './StoreBreadcrumb';
import StoreSidebar from './StoreSidebar';
import ScrollListener from '../utility/ScrollListener';

function Store() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log('store useEffect');
    fetchProducts();
  }, []);

  async function fetchProducts() {
    const apiData = await API.graphql({ query: listProducts });
    setProducts(apiData.data.listProducts.items);
  }

  return (
    <div id="store">
      
      <StoreBreadcrumb/>

      <StoreSidebar
        products={products}
      />

      {/* <ScrollListener 
        elementId='storeSidebar'
        className='sticky-store-sidebar'
      /> */}

      <ProductTable items={products} />

    </div>
  );
}

export default Store;