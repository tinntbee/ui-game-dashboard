import React from "react";

YourVideosIcon.propTypes = {};

function YourVideosIcon(props) {
  return (
    <svg {...props} className={"icon your-videos-icon " + props.className}>
      <svg id="icon-camera" viewBox="0 0 21 20">
        <path d="M11 .25A4.75 4.75 0 0 1 15.75 5v1.135l.643-.462a2.75 2.75 0 0 1 4.348 2.016l.008.215v4.19a2.75 2.75 0 0 1-4.177 2.351l-.18-.12-.643-.463V15a4.75 4.75 0 0 1-4.533 4.745L11 19.75H5A4.75 4.75 0 0 1 .25 15V5A4.75 4.75 0 0 1 5 .25zm0 1.5H5A3.25 3.25 0 0 0 1.75 5v10A3.25 3.25 0 0 0 5 18.25h6A3.25 3.25 0 0 0 14.25 15V5A3.25 3.25 0 0 0 11 1.75zm6.384 5.066l-.115.074-1.52 1.093v4.033l1.52 1.094a1.25 1.25 0 0 0 1.974-.887l.006-.128v-4.19a1.25 1.25 0 0 0-1.866-1.088z"></path>
      </svg>
    </svg>
  );
}

export default YourVideosIcon;
