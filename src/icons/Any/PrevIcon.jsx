import React from "react";

PrevIcon.propTypes = {};

function PrevIcon(props) {
  return (
    <svg {...props} className={"icon prev-icon " + props.className}>
      <svg id="icon-arrow-prev" viewBox="0 0 6 10">
        <path d="M5.707 9.707a1 1 0 0 1-1.32.083l-.094-.083-4-4a1 1 0 0 1-.083-1.32l.083-.094 4-4a1 1 0 0 1 1.497 1.32l-.083.094L2.416 5l3.291 3.293a1 1 0 0 1 .083 1.32l-.083.094z"></path>
      </svg>
    </svg>
  );
}

export default PrevIcon;
