import React from "react";
import "./style.css";

NewsFeedIcon.propTypes = {};

function NewsFeedIcon(props) {
  return (
    <svg {...props} className={"icon news-feed-icon " + props.className}>
      <svg id="icon-game-play" viewBox="0 0 22 22">
        <path d="M7.072.25a.75.75 0 0 1 .743.648L7.822 1a.6.6 0 0 0 .517.583l.1.008H9.5c1.516.005 2.76 1.17 2.856 2.65l.006.172-.001.214 3.31.037c3.51.114 6.08 2.706 6.08 6.197v4.65c0 3.57-2.7 6.2-6.31 6.2l-2.224.028a262.7 262.7 0 0 1-6.644-.028l-.24-.004C2.823 21.595.25 19.003.25 15.51v-4.65c0-3.57 2.69-6.2 6.3-6.2l1.748-.024 2.552-.013.002-.207c-.003-.685-.542-1.252-1.234-1.32l-.13-.007H8.44c-1.166 0-2.118-.933-2.118-2.09a.75.75 0 0 1 .75-.75zm6.55 5.887c-2.384-.024-4.73-.016-7.05.024l-.226.004C3.655 6.267 1.75 8.2 1.75 10.862v4.65c0 2.735 2.012 4.7 4.835 4.7l2.205.028 6.638-.028.226-.004c2.692-.103 4.596-2.036 4.596-4.697v-4.65c0-2.735-2.01-4.7-4.822-4.7zm-5.773 4.427a.75.75 0 0 1 .743.648l.007.102v1.122l1.16.001a.75.75 0 0 1 .102 1.493l-.102.007-1.16-.001v1.123a.75.75 0 0 1-1.493.102l-.007-.102v-1.123l-1.16.001a.75.75 0 0 1-.102-1.493l.102-.007 1.16-.001v-1.122a.75.75 0 0 1 .75-.75zm8.33 3.69a.75.75 0 0 1 .102 1.493l-.102.007h-.107a.75.75 0 0 1-.102-1.493l.102-.007h.107zm-1.814-3.575a.75.75 0 0 1 .102 1.493l-.102.007h-.107a.75.75 0 0 1-.102-1.493l.102-.007h.107z"></path>
      </svg>
    </svg>
  );
}
export default NewsFeedIcon;
