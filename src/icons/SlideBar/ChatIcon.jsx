import React from "react";

ChatIcon.propTypes = {};

function ChatIcon(props) {
  return (
    <svg {...props} className={"icon chat-icon " + props.className}>
      <svg id="icon-profile" viewBox="0 0 17 21">
        <svg id="icon-chat" viewBox="0 0 22 22">
          <path d="M11.062.25A10.766 10.766 0 0 1 21.07 7.242a10.74 10.74 0 0 1-2.975 11.829 10.78 10.78 0 0 1-12.128 1.441l-.05-.017-.01-.013-.734-.415a.73.73 0 0 0-.416-.045 19.02 19.02 0 0 1-2.334.674l-.145.017c-.87.02-1.3-.546-1.3-1.37l.02-.176c.198-.818.446-1.624.728-2.37a.56.56 0 0 0-.046-.436l-.198-.385A10.731 10.731 0 0 1 1.82 5.4 10.77 10.77 0 0 1 11.062.25zm-.01 1.5l-.302.004a9.27 9.27 0 0 0-7.649 4.437 9.24 9.24 0 0 0-.296 9.096l.194.38c.26.484.313 1.05.136 1.618a19.05 19.05 0 0 0-.688 2.236l.1-.395.425-.11.438-.127.443-.14.45-.155c.475-.13.98-.1 1.48.105l.083.04.198.106.57.326.02.005-.013-.002.31.155a9.28 9.28 0 0 0 9.918-1.183l.237-.2a9.24 9.24 0 0 0 2.56-10.177 9.266 9.266 0 0 0-8.613-6.017zM6.287 9.774c.677 0 1.227.55 1.227 1.226a1.228 1.228 0 0 1-2.454 0c0-.678.55-1.226 1.227-1.226zm4.77 0c.677 0 1.227.55 1.227 1.226a1.228 1.228 0 0 1-2.454 0c0-.678.55-1.226 1.227-1.226zm4.77 0c.677 0 1.227.55 1.227 1.226a1.228 1.228 0 0 1-2.454 0c0-.678.55-1.226 1.227-1.226zm-9.54.952a.274.274 0 1 0 .001.547.274.274 0 0 0-.001-.547zm4.77 0a.274.274 0 1 0 .001.547.274.274 0 0 0-.001-.547zm4.77 0a.274.274 0 1 0 .001.547.274.274 0 0 0-.001-.547z"></path>
        </svg>
      </svg>
    </svg>
  );
}

export default ChatIcon;
