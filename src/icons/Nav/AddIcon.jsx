import React from "react";

AddIcon.propTypes = {};

function AddIcon(props) {
  return (
    <svg {...props} className={"icon add-icon " + props.className}>
      <svg id="icon-plus-sm" viewBox="0 0 12 13">
        <path d="M6 .857a1 1 0 0 1 .993.883L7 1.857v4h4a1 1 0 0 1 .117 1.993L11 7.857H7v4a1 1 0 0 1-1.993.117L5 11.857v-4H1a1 1 0 0 1-.117-1.993L1 5.857h4v-4a1 1 0 0 1 1-1z"></path>
      </svg>
    </svg>
  );
}

export default AddIcon;
