import './css/Store.css';
import './css/Store-700.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductTable from '../product/ProductTable';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import StoreBreadcrumb from './StoreBreadcrumb';
import StoreSidebar from './StoreSidebar';
import StoreFilterButton from './StoreFilterButton';

const Store = props => {
  const location = useLocation();
  const { initialCategory } = (location.state) ? location.state : 'All';

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryStrings, setCategoryStrings] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');



  function getCategoryStrings(items) {
    var categoryStrings = [];
    for (var i = 0; i < items.length; i++) {
      var productCategories = items[i].categories;
      if (productCategories && productCategories.length > 0) {
        productCategories.split(',').forEach(function(pc) {
          if (!categoryStrings.includes(pc)) {
            categoryStrings.push(pc);
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
          product.currentCategory = category;
          productsByCategory.push(product);
        }
      }
    });
    return productsByCategory;
  }

  useEffect(() => {
    fetchProducts();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (currentCategory === 'All') {
      setProducts(allProducts);
    }
    else {
      var newProductSet = filterProductsByCategory(allProducts, currentCategory);
      setProducts(newProductSet);
    }
    
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  useEffect(() => {
    setCurrentCategory(initialCategory);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCategory]);


  async function fetchProducts() {
    const apiData = await API.graphql({ query: listProducts });
    const items = apiData.data.listProducts.items;

    setAllProducts(items);
    getCategoryStrings(items);

    if (initialCategory === null || initialCategory === undefined || initialCategory.length === 0 || initialCategory === 'All') {
      setProducts(items);
      setCurrentCategory('All');
    }
    else {
      var newProductSet = filterProductsByCategory(items, initialCategory);
      setProducts(newProductSet);
      setCurrentCategory(initialCategory);
    }

  }

  function returnToShop() {
    setCurrentCategory('All');
  }


  return (
    
    <div id="store">

      <StoreFilterButton />

      <StoreBreadcrumb 
        inactiveCrumbs={[
          <span onClick={returnToShop}>shop</span>, 
        ]}
        activeCrumb={currentCategory}
      />

      <StoreSidebar
        categoryStrings={categoryStrings}
        onUpdate={setCurrentCategory}
        currentCategory={currentCategory}
      />

      <ProductTable items={products}/>


    </div>
    
  );
}

export default Store;