import React, { useState, useEffect } from 'react';
import { useLocation, Routes, Route, Outlet } from 'react-router-dom';
import './css/Store.css';
import ProductTable from './ProductTable';
import { API } from 'aws-amplify';
import { listProducts } from '../../graphql/queries';
import StoreBreadcrumb from './StoreBreadcrumb';
import StoreSidebar from './StoreSidebar';
import ProductPage from './ProductPage';

const Store = props => {
  const location = useLocation();
  const { initialCategory } = location.state;

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [categoryStrings, setCategoryStrings] = useState([]);
  const [currentCategory, setCurrentCategory] = useState('All');

  function fetchInitialCategory() {
    // alert(initialCategory);
    
  }

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

  useEffect(() => {
    setCurrentCategory(initialCategory);
  }, [initialCategory]);


  async function fetchProducts() {
    const apiData = await API.graphql({ query: listProducts });
    const items = apiData.data.listProducts.items;

    setAllProducts(items);
    getCategoryStrings(items);

    if (initialCategory == null || initialCategory.length == 0 || initialCategory == 'All') {
      setProducts(items);
      setCurrentCategory('All');
    }
    else {
      var newProductSet = filterProductsByCategory(items, initialCategory);
      setProducts(newProductSet);
      setCurrentCategory(initialCategory);
    }

  }


  return (
    <div id="store">

      <StoreBreadcrumb 
        currentCategory={currentCategory}
      />

      <StoreSidebar
        categoryStrings={categoryStrings}
        onUpdate={setCurrentCategory}
        currentCategory={currentCategory}
      />

      <ProductTable items={products}/>

      {/* <Routes>
        <Route path='/shop/Winter-Greens' element={<ProductPage id="2" />} />
      </Routes> */}

    </div>
  );
}

export default Store;