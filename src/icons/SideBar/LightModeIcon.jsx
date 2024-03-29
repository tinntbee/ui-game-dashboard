import React from "react";

LightModeIcon.propTypes = {};

function LightModeIcon(props) {
  return (
    <svg {...props} className={"icon light-mode-icon " + props.className}>
      <svg id="icon-sun" viewBox="0 0 24 24">
        <path d="M12 21a1 1 0 0 1 .993.883L13 22v1a1 1 0 0 1-1.993.117L11 23v-1a1 1 0 0 1 1-1zm7.713-2.7l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7a1 1 0 0 1 1.32-1.497zm-14.106.083a1 1 0 0 1 .083 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7a1 1 0 0 1 1.414 0zM12 6a6 6 0 1 1 0 12 6 6 0 1 1 0-12zm0 2a4 4 0 1 0 0 8 4 4 0 1 0 0-8zM2 11a1 1 0 0 1 .117 1.993L2 13H1a1 1 0 0 1-.117-1.993L1 11h1zm21 0a1 1 0 0 1 .117 1.993L23 13h-1a1 1 0 0 1-.117-1.993L22 11h1zM4.813 3.4l.094.083.7.7a1 1 0 0 1-1.32 1.497l-.094-.083-.7-.7A1 1 0 0 1 4.813 3.4zm15.694.083a1 1 0 0 1 .083 1.32l-.083.094-.7.7a1 1 0 0 1-1.497-1.32l.083-.094.7-.7a1 1 0 0 1 1.414 0zM12 0a1 1 0 0 1 .993.883L13 1v1a1 1 0 0 1-1.993.117L11 2V1a1 1 0 0 1 1-1z"></path>
      </svg>
    </svg>
  );
}

export default LightModeIcon;
