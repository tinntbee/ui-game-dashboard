import React from "react";

ConnectionIcon.propTypes = {};

function ConnectionIcon(props) {
  return (
    <svg {...props} className={"icon connection-icon " + props.className}>
      <svg id="icon-live" viewBox="0 0 16 11">
        <path d="M7.716 7a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm4.593-1.658a1 1 0 0 1-1.413 1.415 4.5 4.5 0 0 0-6.362 0 1 1 0 0 1-1.413-1.415 6.5 6.5 0 0 1 9.188 0zm2.83-2.145a1 1 0 0 1-1.414 1.415 8.5 8.5 0 0 0-12.02 0A1 1 0 1 1 .293 3.197c4.1-4.099 10.746-4.099 14.847 0z"></path>
      </svg>
    </svg>
  );
}

export default ConnectionIcon;
