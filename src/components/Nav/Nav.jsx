import React from "react";
import { IconContext } from "react-icons/lib";
import "./Nav.css";

Nav.propTypes = {};

function Nav(props) {
  return (
    <IconContext.Provider value={{color: "#fff"}}>
      <div className="nav-bar">
      </div>
    </IconContext.Provider>
  );
}

export default Nav;
