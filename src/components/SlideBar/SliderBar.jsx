import classNames from "classnames";
import React, { useState } from "react";
import { IconContext } from "react-icons/lib";
import { Link } from "react-router-dom";
import WhiteLogo from "../../icons/Logo/WhiteLogo";
import LightModeIcon from "../../icons/SlideBar/LightModeIcon";
import LoadMoreIcon from "../../icons/SlideBar/LoadMoreIcon";
import "./SlideBar.css";
import {
  SlideBarData_Analytics,
  SlideBarData_Following,
  SlideBarData_NewsFeeds,
  SlideBarData_UnityGaming,
} from "./SlideBarData";

SliderBar.propTypes = {};

function SliderBar(props) {
  const [slideItemActive, setSlideItemActive] = useState(0);
  const [followingItemActive, setFollowingItemActive] = useState(-1);
  const [slideBurger, setSlideBurger] = useState(true);
  const [unityGamingItemActive, setUnityGamingItemActive] = useState(-1);
  const handleSlideItemClick = (index) => {
    setSlideItemActive(index);
    if (followingItemActive !== -1) {
      setFollowingItemActive(-1);
    }
    if (unityGamingItemActive !== -1) {
      setUnityGamingItemActive(-1);
    }
  };
  const handleSlideBurgerClick = () => {
    setSlideBurger(!slideBurger);
  };
  const handleFollowingItemClick = (index) => {
    setFollowingItemActive(index);
    if (slideItemActive !== -1) {
      setSlideItemActive(-1);
    }
    if (unityGamingItemActive !== -1) {
      setUnityGamingItemActive(-1);
    }
  };
  const handleUnityGamingItemActive = (index) => {
    setUnityGamingItemActive(index);
    if (followingItemActive !== -2) {
      setFollowingItemActive(-2);
    }
    if (slideItemActive !== -1) {
      setSlideItemActive(-1);
    }
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
      <div className={slideBurger ? "slide-bar active" : "slide-bar"}>
        <div className="slide-bar-header">
          <WhiteLogo className="slide-bar__logo" />
          <button
            onClick={() => handleSlideBurgerClick()}
            className={
              slideBurger ? "slide-bar__burger active" : "slide-bar__burger"
            }
          ></button>
        </div>

        <div className="slide-bar-body">
          <div className="slide-bar__home-tabs">
            <h2 className="slide-bar__title">New Feeds</h2>
            <ul>
              <li
                className={classNames({
                  item_active: true,
                  visible: slideItemActive >= 0,
                })}
                style={
                  slideItemActive !== -1 ? { "--value": slideItemActive } : {}
                }
              >
                <Link to="#" />
              </li>
              {SlideBarData_NewsFeeds.map((item, index) => {
                return (
                  <li
                    className={
                      index === slideItemActive
                        ? item.className + " active"
                        : item.className
                    }
                    onClick={() => handleSlideItemClick(index)}
                    key={index}
                  >
                    <Link
                      to={item.path}
                      className={index === slideItemActive ? "active" : ""}
                    >
                      {item.icon}
                      <span className="slide-bar-item__name">{item.title}</span>
                      {item.icon_last ? item.icon_last : ""}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="slide-bar__following-list">
            <h2 className="slide-bar__title">Following</h2>
            <ul>
              <li
                className={classNames({
                  following_item: true,
                  following_item_active: true,
                  visible: followingItemActive >= 0,
                })}
                style={calcPositionFollowingActive(followingItemActive)}
              ></li>
              {SlideBarData_Following.map((item, index) => {
                return (
                  <li
                    onClick={() => handleFollowingItemClick(index)}
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
                    <span className="slide-bar-item__name">{item.name}</span>
                  </li>
                );
              })}
              <li className="following_item__load-more">
                <LoadMoreIcon />
                <span className="slide-bar-item__name">Load more</span>
              </li>
            </ul>
          </div>

          <div className="slide-bar__unity-gaming">
            <h2 className="slide-bar__title">Unity Gaming</h2>
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
              {SlideBarData_UnityGaming.map((item, index) => {
                return (
                  <li
                    key={index}
                    className={classNames({
                      "unity-gaming-item": true,
                      active: index === unityGamingItemActive,
                    })}
                    onClick={() => handleUnityGamingItemActive(index)}
                    style={{ "--value": item.status }}
                    value={item.status}
                  >
                    <Link to={item.path}>
                      {item.icon}
                      <span className="slide-bar-item__name">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="slide-bar__banner">
            {SlideBarData_Analytics.map((item, index) => {
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

        <div className="slide-bar-footer">
          {/* <LightModeIcon /> */}
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default SliderBar;
