import React from "react";
import "./style.css";

FollowedChannels.propTypes = {};

function FollowedChannels(props) {
  return (
    <div className="followed-channels">
      <div className="header">
        <h3 className="title">From Channels You Follow</h3>
      </div>
      <div className="body">
        <ul className="list-channels">
          <li>
            <button className="avatar add-follow-channel" />
            <h4 className="name">Add More Channel</h4>
          </li>
          <li>
            <div className="avatar" />
            <h4 className="name">Add More Channel</h4>
            <p className="status">14m ago</p>
          </li>
          <li>
            <div className="avatar" />
            <h4 className="name">Add More Channel</h4>
            <p className="status">14m ago</p>
          </li>
          <li>
            <div className="avatar" />
            <h4 className="name">Add More Channel</h4>
            <p className="status">14m ago</p>
          </li>
          <li>
            <div className="avatar" />
            <h4 className="name">Add More Channel</h4>
            <p className="status">14m ago</p>
          </li>
          <li>
            <div className="avatar" />
            <h4 className="name">Add More Channel</h4>
            <p className="status">14m ago</p>
          </li>
          <li>
            <div className="avatar" />
            <h4 className="name">Add More Channel</h4>
            <p className="status">14m ago</p>
          </li> 
        </ul>
      </div>
    </div>
  );
}

export default FollowedChannels;
