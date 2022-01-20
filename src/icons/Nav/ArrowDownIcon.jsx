import React from "react";

ArrowDownIcon.propTypes = {};

function ArrowDownIcon(props) {
  return (
    <svg {...props} className={"icon arrow-down-icon " + props.className}>
      <svg id="icon-arrow-down" viewBox="0 0 10 6">
        <path d="M9.707.293a1 1 0 0 1 .083 1.32l-.083.094-4 4a1 1 0 0 1-1.32.083l-.094-.083-4-4A1 1 0 0 1 1.613.21l.094.083L5 3.584 8.293.293A1 1 0 0 1 9.613.21l.094.083z"></path>
      </svg>
    </svg>
  );
}

export default ArrowDownIcon;
