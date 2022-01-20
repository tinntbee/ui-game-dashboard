import classNames from "classnames";
import React, { useRef, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

ProfileControl.propTypes = {};

function ProfileControl(props) {
  const { data } = props;
  const { profile, control } = data;

  const [active, setActive] = useState(false);
  const container = useRef();

  const handleClick = () => {
    setActive(!active);
  };
  const handleClickOutside = (event) => {
    if (
      container.current &&
      !container.current.contains(event.target)
    ) {
      setActive(false);
    }
  };
  document.addEventListener("mousedown", handleClickOutside);

  return (
    <div
      className={classNames({
        "profile-control": true,
        active: active,
      })}
      ref={container}
    >
      <img
        className="avatar"
        alt="avatar"
        src={profile.avatar_url}
        onClick={() => handleClick()}
      />

      <div className="control">
        <ul>
          {control.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default ProfileControl;
