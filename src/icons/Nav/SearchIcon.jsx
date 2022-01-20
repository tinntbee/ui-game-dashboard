import React from "react";

SearchIcon.propTypes = {};

function SearchIcon(props) {
  return (
    <svg {...props} className={"icon search-icon " + props.className}>
      <svg id="icon-search" viewBox="0 0 20 20">
        <path d="M9.612 0c5.308 0 9.612 4.208 9.612 9.4 0 2.45-.958 4.68-2.53 6.354l3.088 3.01c.29.282.3.74.001 1.024a.753.753 0 0 1-.964.07l-.083-.07-3.124-3.047a9.706 9.706 0 0 1-6 2.057C4.303 18.8 0 14.6 0 9.4S4.303 0 9.612 0zm0 1.448c-4.49 0-8.13 3.56-8.13 7.952s3.64 7.952 8.13 7.952 8.13-3.56 8.13-7.952-3.64-7.952-8.13-7.952z"></path>
      </svg>
    </svg>
  );
}

export default SearchIcon;
