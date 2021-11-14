import './css/StoreBreadcrumb.css';
import './css/StoreBreadcrumb-700.css';
import React, { useState, useEffect } from 'react';


const StoreBreadcrumb = props => {
  const [crumbs, setCrumbs] = useState([]);

  useEffect(() => {
    var crumbs = [];
    for (var i = 0; i < props.inactiveCrumbs.length; i++) {
      crumbs.push(<span key={i} className="crumb inactive-breadcrumb">{props.inactiveCrumbs[i]}</span>);
    }
    if (props.activeCrumb !== undefined) {
      crumbs.push(<span key={props.inactiveCrumbs.length} className="crumb active-breadcrumb">{props.activeCrumb}</span>);
    }
    setCrumbs(crumbs);
  }, [props.inactiveCrumbs, props.activeCrumb]);

  return (
    <div id="storeBreadcrumb">
        {crumbs}
    </div>
  );

}

export default StoreBreadcrumb;