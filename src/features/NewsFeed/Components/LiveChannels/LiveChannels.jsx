import React from "react";
import ViewCard from "../../../../components/ViewCard/ViewCard";
import "./style.css";


function LiveChannels(props) {
  const {dataLiveChannels} = props;
  return (
    <div className="live-channels">
      <div className="live-channels-header">
        <h3 className="title">Live Channels</h3>
        <select className="filter">
          <option>Popular</option>
          <option>b</option>
        </select>
      </div>
      <div className="live-channels-body">
        <div className="list-view-card">
          {dataLiveChannels.map((item, index) => {
            return <ViewCard data={item}/>;
          })}
        </div>
      </div>
    </div>
  );
}

export default LiveChannels;
