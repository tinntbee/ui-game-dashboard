import React from "react";

LogOutIcon.propTypes = {};

function LogOutIcon(props) {
  return (
    <svg {...props} className={"icon log-out-icon " + props.className}>
      <svg id="icon-logout" viewBox="0 0 24 18">
        <path d="M14.5.25c4.814 0 8.75 3.936 8.75 8.75s-3.936 8.75-8.75 8.75c-3.113 0-5.985-1.693-7.548-4.372a.75.75 0 1 1 1.296-.756c1.297 2.224 3.68 3.628 6.252 3.628 3.986 0 7.25-3.264 7.25-7.25s-3.264-7.25-7.25-7.25c-2.636 0-4.935 1.37-6.252 3.628a.75.75 0 1 1-1.296-.756C8.534 1.91 11.32.25 14.5.25zM5.03 5.47a.75.75 0 0 1 .073.977l-.073.084L3.3 8.25h12.2a.75.75 0 0 1 .102 1.493l-.102.007H3.3l1.72 1.72a.75.75 0 0 1 .073.977l-.073.084a.75.75 0 0 1-.977.073l-.084-.073-3-3-.063-.072.063.072C.933 9.493.9 9.453.873 9.41a.77.77 0 0 1-.037-.063.67.67 0 0 1-.013-.027.75.75 0 0 1-.034-.085l-.006-.02A.65.65 0 0 1 .75 9c0-.038.003-.076.008-.113a.83.83 0 0 1 .006-.035c.005-.025.01-.05.018-.073a.8.8 0 0 1 .012-.037.74.74 0 0 1 .028-.066L.84 8.64a.731.731 0 0 1 .043-.07l.013-.018a.699.699 0 0 1 .073-.084l3-3a.75.75 0 0 1 1.061 0z"></path>
      </svg>
    </svg>
  );
}

export default LogOutIcon;
