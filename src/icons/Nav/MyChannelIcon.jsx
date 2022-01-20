import React from "react";

MyChannelIcon.propTypes = {};

function MyChannelIcon(props) {
  return (
    <svg {...props} className={"icon my-channel-icon " + props.className}>
      <svg id="icon-joystick" viewBox="0 0 24 16">
        <path d="M21 .25A2.75 2.75 0 0 1 23.75 3v10A2.75 2.75 0 0 1 21 15.75H3A2.75 2.75 0 0 1 .25 13V3A2.75 2.75 0 0 1 3 .25zm0 1.5H3A1.25 1.25 0 0 0 1.75 3v10A1.25 1.25 0 0 0 3 14.25h18A1.25 1.25 0 0 0 22.25 13V3A1.25 1.25 0 0 0 21 1.75zM7 5.25a.75.75 0 0 1 .743.648L7.75 6v1.25H9a.75.75 0 0 1 .102 1.493L9 8.75H7.75V10a.75.75 0 0 1-1.493.102L6.25 10V8.75H5a.75.75 0 0 1-.102-1.493L5 7.25h1.25V6A.75.75 0 0 1 7 5.25zm10 0a2.75 2.75 0 1 1 0 5.5 2.75 2.75 0 1 1 0-5.5zm0 1.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 1 0 0-2.5z"></path>
      </svg>
    </svg>
  );
}

export default MyChannelIcon;
