import classNames from "classnames";
import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

NotificationControl.propTypes = {};

function NotificationControl(props) {
  const { data } = props;
  const { NotificationButton, listNotification } = data;

  const [active, setActive] = useState(false);
  const container = useRef();

  const handleClick = () => {
    setActive(!active);
  };
  const handleClickOutside = (event) => {
    if (container.current && !container.current.contains(event.target)) {
      setActive(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);
  return (
    <div ref={container} className={classNames({
      'nav-control': true,
      'notification-control': true,
      'active': active
    })}>
      <div onClick={() => handleClick()} className="nav-icon">
        {NotificationButton.icon}
        {NotificationButton.value !== 0 ? (
          <div className="item-value" value={NotificationButton.value}></div>
        ) : (
          ""
        )}
      </div>
      <div className="dropdown">
        <div className="list">
          <h2 className="info">Recent Notification</h2>
          <ul>
            {listNotification.map((item, index) => {
              return (
                <li key={index}>
                  <Link to={item.path}>
                    <img alt="avatar" src={item.image} />
                    <div className="content">
                      <h3 className="title">{item.title}</h3>
                      {item.description}
                      <h4 className="time">{item.timeLeft}</h4>
                    </div>
                    {item.icon}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NotificationControl;
