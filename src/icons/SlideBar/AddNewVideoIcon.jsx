import React from "react";

AddNewVideoIcon.propTypes = {};

function AddNewVideoIcon(props) {
  return (
    <svg {...props} className={"icon add-new-video-icon " + props.className}>
      <svg id="icon-profile" viewBox="0 0 17 21">
        <svg id="icon-add" viewBox="0 0 22 22">
          <path d="M11 0c6.075 0 11 4.925 11 11s-4.925 11-11 11S0 17.075 0 11 4.925 0 11 0zm0 2a9 9 0 1 0 0 18 9 9 0 0 0 0-18zm0 3a1 1 0 0 1 .993.883L12 6v4h4a1 1 0 0 1 .117 1.993L16 12h-4v4a1 1 0 0 1-1.993.117L10 16v-4H6a1 1 0 0 1-.117-1.993L6 10h4V6a1 1 0 0 1 1-1z"></path>
        </svg>
      </svg>
    </svg>
  );
}

export default AddNewVideoIcon;
