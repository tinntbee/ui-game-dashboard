import React from "react";

BrowseIcon.propTypes = {};

function BrowseIcon(props) {
  return (
    <svg {...props} className={"icon browse-icon " + props.className}>
      <svg id="icon-location" viewBox="0 0 21 21">
        <path d="M10.61.25c5.722 0 10.36 4.64 10.36 10.36s-4.64 10.36-10.36 10.36S.25 16.333.25 10.61 4.89.25 10.61.25zm0 1.5a8.86 8.86 0 1 0 0 17.72 8.86 8.86 0 0 0 0-17.72zm3.117 4.804a.75.75 0 0 1 .94.94l-1.593 5.09a.75.75 0 0 1-.492.492l-5.09 1.593a.75.75 0 0 1-.94-.94l1.593-5.09a.75.75 0 0 1 .492-.492zm-.92 1.86L9.46 9.46l-1.048 3.347 3.347-1.048 1.048-3.347z"></path>
      </svg>
    </svg>
  );
}

export default BrowseIcon;
