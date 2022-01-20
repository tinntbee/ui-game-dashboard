import React from "react";
import { IconContext } from "react-icons/lib";
import ArrowDownIcon from "../../icons/Nav/ArrowDownIcon";
import BrowseIcon from "../../icons/Nav/BrowseIcon";
import SearchIcon from "../../icons/Nav/SearchIcon";
import "./Nav.css";
import { Data_Control } from "./NavData";

Nav.propTypes = {};

function Nav(props) {
  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className="nav-bar">
        <div className="nav-bar__left">
          <div className="browse">
            <BrowseIcon />
            <span>Browse</span>
            <ArrowDownIcon />
          </div>
          <div className="search-bar">
            <SearchIcon />
            <input type="text" placeholder="Search Everything"></input>
          </div>
        </div>
        <div className="nav-bar__right">
          <ul>
            {Data_Control.map((item, index) => {
              return (
                <li key={index} className="item">
                  {item.render}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Nav;
