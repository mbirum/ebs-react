import React, { useState, useEffect } from 'react';
import './css/StoreBreadcrumb.css';

const StoreBreadcrumb = props => {

  return (
    <div id="storeBreadcrumb">
        / <span className="inactive-breadcrumb">shop</span> / <span className="active-breadcrumb">All</span>
    </div>
  );
}

export default StoreBreadcrumb;