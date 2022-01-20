import React from "react";
import PropTypes from "prop-types";
import "./style.css";
import classNames from "classnames";
import StreamIcon from "../../icons/SideBar/StreamIcon";

ViewCard.propTypes = {};

function ViewCard(props) {
  const {data} = props;

  const convertTotalViewer = (Number) => {
    const newTotal =
      data.viewer > 99999999
        ? (data.viewer / 1000000000).toFixed(1) ===
          (data.viewer / 1000000000).toFixed(0) + ".0"
          ? (data.viewer / 1000000000).toFixed(0) + "T"
          : (data.viewer / 1000000000).toFixed(1) + "T"
        : data.viewer > 99999
        ? (data.viewer / 1000000).toFixed(1) ===
          (data.viewer / 1000000).toFixed(0) + ".0"
          ? (data.viewer / 1000000).toFixed(0) + "M"
          : (data.viewer / 1000000).toFixed(1) + "M"
        : data.viewer > 999
        ? (data.viewer / 1000).toFixed(1) ===
          (data.viewer / 1000).toFixed(0) + ".0"
          ? (data.viewer / 1000).toFixed(0) + "K"
          : (data.viewer / 1000).toFixed(1) + "K"
        : data.viewer;
    return newTotal;
  };
  return (
    <div className="view-card">
      <div
        className="view-card__header"
        style={{ backgroundImage: "url('" + data.thumbnail + "')" }}
      ></div>
      <div className="view-card__body">
        <h3 className="title">{data.title}</h3>
        <div className="host">
          <img className="avatar" alt={data.host.name} src={data.host.avatar} />
          <p
            className={classNames({
              name: true,
              isAuth: data.host.isAuth,
            })}
          >
            {data.host.name}
          </p>
          <p className="name-game">{data.game}</p>
        </div>
      </div>
      <div className="view-card__footer">
        <div className="live-status">
          <StreamIcon />
          <span>Live</span>
        </div>
        <span className="viewer">{convertTotalViewer(data.viewer) + " watching"}</span>
      </div>
    </div>
  );
}

export default ViewCard;
