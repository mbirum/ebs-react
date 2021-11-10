import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/Store.css';
import ProductTable from './ProductTable';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import StoreBreadcrumb from './StoreBreadcrumb';
import StoreSidebar from './StoreSidebar';

function Store() {
  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryStrings, setCategoryStrings] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('all');

  function getCategoryStrings(items) {
    var categoryStrings = [];
    var k = 0;
    for (var i = 0; i < items.length; i++) {
      var productCategories = items[i].categories;
      if (productCategories && productCategories.length > 0) {
        productCategories.split(',').forEach(function(pc) {
          if (!categoryStrings.includes(pc)) {
            categoryStrings.push(pc);
            k = k + 1;
          }
        });
      } 
    }
    setCategoryStrings(categoryStrings);
  }

  function filterProductsByCategory(products, category) {
    var productsByCategory = [];
    products.forEach(function(product) {
      if (product.categories != null && product.categories.length > 0) {
        if (product.categories.includes(category)) {
          productsByCategory.push(product);
        }
      }
    });
    return productsByCategory;
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (currentCategory == 'All') {
      setProducts(allProducts);
    }
    else {
      var newProductSet = filterProductsByCategory(allProducts, currentCategory);
      setProducts(newProductSet);
    }
    
  }, [currentCategory]);

  async function fetchProducts() {
    const apiData = await API.graphql({ query: listProducts });
    const items = apiData.data.listProducts.items;
    setProducts(items);
    setAllProducts(items);
    getCategoryStrings(items);
  }

  return (
    <div id="store">
      
      <StoreBreadcrumb/>

      <StoreSidebar
        categoryStrings={categoryStrings}
        onUpdate={setCurrentCategory}
      />

      <ProductTable items={products}/>

    </div>
  );
}

export default Store;