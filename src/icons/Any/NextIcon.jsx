import React from "react";

NextIcon.propTypes = {};

function NextIcon(props) {
  return (
    <svg {...props} className={"icon next-icon " + props.className}>
      <svg id="icon-arrow-next" viewBox="0 0 6 10">
        <path d="M.293.293A1 1 0 0 1 1.613.21l.094.083 4 4a1 1 0 0 1 .083 1.32l-.083.094-4 4A1 1 0 0 1 .21 8.387l.083-.094L3.584 5 .293 1.707A1 1 0 0 1 .21.387L.293.293z"></path>
      </svg>
    </svg>
  );
}

export default NextIcon;
