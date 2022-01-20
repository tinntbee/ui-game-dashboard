import classNames from "classnames";
import React, { useEffect, useState } from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import WhiteLogo from "../../icons/Logo/WhiteLogo";
import LoadMoreIcon from "../../icons/SideBar/LoadMoreIcon";
import "./SideBar.css";
import {
  SideBarData_Analytics,
  SideBarData_Following,
  SideBarData_NewsFeeds,
  SideBarData_UnityGaming
} from "./SideBarData";

SideBar.propTypes = {};

function SideBar(props) {
  const [sideItemActive, setSideItemActive] = useState(0);
  const [followingItemActive, setFollowingItemActive] = useState(-1);
  const [sideBurger, setSideBurger] = useState(false);
  const [unityGamingItemActive, setUnityGamingItemActive] = useState(-1);
  const [title, setTitle] = useState("News Feed");
  useEffect(() => {
    document.title = title;
  }, [title]);
  const handleSideItemClick = (index, item) => {
    setSideItemActive(index);
    if (followingItemActive !== -1) {
      setFollowingItemActive(-1);
    }
    if (unityGamingItemActive !== -1) {
      setUnityGamingItemActive(-1);
    }
    setTitle(item.title);
  };
  const handleSideBurgerClick = () => {
    setSideBurger(!sideBurger);
  };
  const handleFollowingItemClick = (index, item) => {
    setFollowingItemActive(index);
    if (sideItemActive !== -1) {
      setSideItemActive(-1);
    }
    if (unityGamingItemActive !== -1) {
      setUnityGamingItemActive(-1);
    }
    setTitle(item.name + " | UI-gaming");
  };
  const handleUnityGamingItemActive = (index, item) => {
    setUnityGamingItemActive(index);
    if (followingItemActive !== -2) {
      setFollowingItemActive(-2);
    }
    if (sideItemActive !== -1) {
      setSideItemActive(-1);
    }
    setTitle(item.name);
  };
  const calcPositionFollowingActive = (index) => {
    if (index >= 0) {
      return { "--value": index };
    }
    if (index === -1) {
      return { "--position": "0%" };
    }
    return { "--position": "100%" };
  };

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <div className={sideBurger ? "side-bar active" : "side-bar"}>
        <div className="side-bar-header">
          <WhiteLogo className="side-bar__logo" />
          <button
            onClick={() => handleSideBurgerClick()}
            className={
              sideBurger ? "side-bar__burger active" : "side-bar__burger"
            }
          ></button>
        </div>

        <div className="side-bar-body">
          <div className="side-bar__home-tabs">
            <h2 className="side-bar__title">New Feeds</h2>
            <ul>
              <li
                className={classNames({
                  item_active: true,
                  visible: sideItemActive >= 0,
                })}
                style={
                  sideItemActive !== -1 ? { "--value": sideItemActive } : {}
                }
              >
                <Link to="#" />
              </li>
              {SideBarData_NewsFeeds.map((item, index) => {
                return (
                  <li
                    className={
                      index === sideItemActive
                        ? item.className + " active"
                        : item.className
                    }
                    onClick={() => handleSideItemClick(index, item)}
                    key={index}
                  >
                    <Link
                      to={item.path}
                      className={index === sideItemActive ? "active" : ""}
                    >
                      {item.icon}
                      <span className="side-bar-item__name">{item.title}</span>
                      {item.icon_last ? item.icon_last : ""}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="side-bar__following-list">
            <h2 className="side-bar__title">Following</h2>
            <ul>
              <li
                className={classNames({
                  following_item: true,
                  following_item_active: true,
                  visible: followingItemActive >= 0,
                })}
                style={calcPositionFollowingActive(followingItemActive)}
              ></li>
              {SideBarData_Following.map((item, index) => {
                return (
                  <li
                    onClick={() => handleFollowingItemClick(index, item)}
                    className={classNames({
                      following_item: true,
                      active: index === followingItemActive,
                      online: item.status === "online",
                      streaming: item.status === "streaming",
                    })}
                    key={index}
                  >
                    <img
                      className="following_item__avatar"
                      alt={item.name}
                      src={item.avatar_url}
                    />
                    <span className="side-bar-item__name">{item.name}</span>
                  </li>
                );
              })}
              <li className="following_item__load-more">
                <LoadMoreIcon />
                <span className="side-bar-item__name">Load more</span>
              </li>
            </ul>
          </div>

          <div className="side-bar__unity-gaming">
            <h2 className="side-bar__title">Unity Gaming</h2>
            <ul>
              <li
                className={classNames({
                  unity_active: true,
                  visible: unityGamingItemActive >= 0,
                })}
                style={
                  unityGamingItemActive !== -1
                    ? { "--value": unityGamingItemActive }
                    : {}
                }
              >
                <Link to="#" />
              </li>
              {SideBarData_UnityGaming.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classNames({
                      "unity-gaming-item": true,
                      active: index === unityGamingItemActive,
                    })}
                    onClick={() => handleUnityGamingItemActive(index, item)}
                    style={{ "--value": item.status }}
                    value={item.status}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span className="side-bar-item__name">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="side-bar__banner">
            {SideBarData_Analytics.map((item, index) => {
              return (
                <div key={index} className="analytics-item">
                  <div
                    className="analytics-item-thumbnail"
                    style={{
                      backgroundImage: "url('" + item.thumbnail + "'",
                    }}
                  ></div>
                  <button className="analytics-item-close" />
                  <Link to={item.path}>
                    <p>Join Now</p>
                  </Link>
                  <h3>{item.description}</h3>
                  <h2>{item.title}</h2>
                </div>
              );
            })}
          </div>
        </div>

        <div className="side-bar-footer">{/* <LightModeIcon /> */}</div>
      </div>
    </IconContext.Provider>
  );
}

export default SideBar;
