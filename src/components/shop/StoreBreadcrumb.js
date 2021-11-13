import React, { useState, useEffect } from 'react';
import './css/StoreBreadcrumb.css';

const StoreBreadcrumb = props => {
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    var crumbs = [];
    for (var i = 0; i < props.inactiveCrumbs.length; i++) {
      crumbs.push(<span key={i} className="inactive-breadcrumb">{props.inactiveCrumbs[i]}</span>);
    }
    crumbs.push(<span key={props.inactiveCrumbs.length} className="active-breadcrumb">{props.activeCrumb}</span>);
    setCrumbs(crumbs);
  }, [props.inactiveCrumbs, props.activeCrumb]);

  return (
    <div id="storeBreadcrumb">
        {crumbs}
    </div>
  );

}

export default StoreBreadcrumb;