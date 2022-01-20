import { Link } from "react-router-dom";
import classNames from "classnames";
import React, { useRef, useState } from "react";
import "./style.css";

AddVideoControl.propTypes = {};

function AddVideoControl(props) {
  const { data } = props;
  const { AddVideoButton, listOption } = data;

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
    <div
      ref={container}
      className={classNames({
        "nav-control": true,
        "add-video-control": true,
        active: active,
      })}
    >
      <div onClick={() => handleClick()} className="nav-icon">
        {AddVideoButton.icon}
      </div>
      <div className="dropdown">
        <ul>
          {listOption.map((item, index) => {
            return (
              <li key={index}>
                <Link to={item.path}>
                  {item.icon}
                  <span className="title"> {item.title}</span>
                  {item.iconLast}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default AddVideoControl;
