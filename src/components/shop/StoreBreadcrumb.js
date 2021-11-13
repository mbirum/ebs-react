import React, { useState, useEffect } from 'react';
import './css/StoreBreadcrumb.css';
import StoreFilterButton from './StoreFilterButton';

const StoreBreadcrumb = props => {

  return (
    <div id="storeBreadcrumb">
        / <span className="inactive-breadcrumb">shop</span> / <span className="active-breadcrumb">{props.currentCategory}</span> <StoreFilterButton />
    </div>
  );

}

export default StoreBreadcrumb;