import './css/Store.css';
import './css/Store-700.css';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductTable from '../product/ProductTable';
import StoreBreadcrumb from './StoreBreadcrumb';
import StoreSidebar from './StoreSidebar';
import StoreFilterButton from './StoreFilterButton';
import { getAllProducts } from '../../utils/APIWrapper';
import SmoothScroller from '../utility/scroll/SmoothScroller';

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

  function adjustScrollTop() {
    var siteHeader = document.getElementById('siteHeader');

    var scrollTopValue = 570;
    if (window.innerWidth <= 700) {
      scrollTopValue = 500;
    }
    else if (siteHeader.classList.contains('sticky-header')) {
        scrollTopValue = 480;
    }
    // window.scrollTo(0, scrollTopValue);
    new SmoothScroller().scrollbasic(scrollTopValue);
  }

  useEffect(() => {
    if (currentCategory === 'All') {
      setProducts(allProducts);
    }
    else {
      var newProductSet = filterProductsByCategory(allProducts, currentCategory);
      setProducts(newProductSet);
    }
    setTimeout(adjustScrollTop, 350);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCategory]);

  useEffect(() => {
    setCurrentCategory(initialCategory);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialCategory]);


  async function fetchProducts() {
    let items = await getAllProducts();

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
    <>
      <div id="storeBannerWrapper">
        <img alt="Store" id="storeBanner" src="../../store-banner.png" />
      </div>

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

        <ProductTable items={products} />


      </div>
    </>
  );
}

export default Store;