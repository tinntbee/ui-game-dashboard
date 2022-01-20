import React from "react";
import FollowedChannels from "./Components/FollowedChannels/FollowedChannels";
import LiveChannels from "./Components/LiveChannels/LiveChannels";
import SliderBar from "./Components/SliderBar/SliderBar";
import "./NewsFeed.css";

NewsFeed.propTypes = {};

function NewsFeed(props) {
  const dataLiveChannels = [
    {
      thumbnail: "https://www.techtimes.vn/wp-content/uploads/2020/12/genshin-impact-duoc-vinh-danh-la-tro-choi-cua-nam-2020-tren-googleplay-va-appstore-tech-time-1.jpg",
      title: "2020 World Champs Gaming Warzone",
      host: {
        name: "Tam Tran",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4Y4MQ9wIV2PFlUuQHngDdp7ZKu8UTMrR7EE7thtSKLgZhp1LW3ArIp6NZyDRgSwaM_E&usqp=CAU",
        isAuth: true,
      },
      game: "Genshin Impact®",
      path: "#",
      viewer: 4658300,
    },
    {
      thumbnail: "https://lienquan.garena.vn/files/skin/a7628c4829025419770e545fe49e6ed95fc55aa8f2cf2.jpg",
      title: "2020 World Champs Gaming Warzone",
      host: {
        name: "Tam Tran",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4Y4MQ9wIV2PFlUuQHngDdp7ZKu8UTMrR7EE7thtSKLgZhp1LW3ArIp6NZyDRgSwaM_E&usqp=CAU",
        isAuth: true,
      },
      game: "Genshin Impact®",
      path: "#",
      viewer: 4658300,
    },
    {
      thumbnail: "https://hoanghapc.vn/media/news/326_genshin_impact.jpg",
      title: "2020 World Champs Gaming Warzone",
      host: {
        name: "Tam Tran",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4Y4MQ9wIV2PFlUuQHngDdp7ZKu8UTMrR7EE7thtSKLgZhp1LW3ArIp6NZyDRgSwaM_E&usqp=CAU",
        isAuth: true,
      },
      game: "Genshin Impact®",
      path: "#",
      viewer: 4658300,
    },
    {
      thumbnail: "https://pubgm.zing.vn/imgs/header.jpg",
      title: "2020 World Champs Gaming Warzone",
      host: {
        name: "Tam Tran",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4Y4MQ9wIV2PFlUuQHngDdp7ZKu8UTMrR7EE7thtSKLgZhp1LW3ArIp6NZyDRgSwaM_E&usqp=CAU",
        isAuth: true,
      },
      game: "Genshin Impact®",
      path: "#",
      viewer: 4658300,
    },
  ];
  return (
    <div className="NewsFeed">
      <SliderBar />
      <div className="NewsFeed__Container">
        <LiveChannels dataLiveChannels={dataLiveChannels} />
        <FollowedChannels />
      </div>
    </div>
  );
}

export default NewsFeed;
