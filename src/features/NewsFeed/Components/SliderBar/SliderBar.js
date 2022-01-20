import React, { useState } from "react";
import Slider from "react-slick";
import NextIcon from "../../../../icons/Any/NextIcon";
import PrevIcon from "../../../../icons/Any/PrevIcon";
import StreamIcon from "../../../../icons/SideBar/StreamIcon";
import "./style.css";

SliderBar.propTypes = {};

function SliderBar(props) {
  const [activeIndexSlide, setActiveIndexSlide] = useState(0);
  const listSlide = [
    {
      url: "https://hoanghapc.vn/media/news/326_genshin_impact.jpg",
      name: "image 1",
    },
    {
      url: "https://d9n64ieh9hz8y.cloudfront.net/wp-content/uploads/20201219213228/league-of-riot-dang-thuc-hien-league-of-legends-mmorpg-tin-game.jpg",
      name: "image 1",
    },
    {
      url: "https://i.ytimg.com/vi/6vZ6Px-ak-I/maxresdefault.jpg",
      name: "image 1",
    },
    {
      url: "https://i.pinimg.com/originals/07/c9/76/07c976b89fbc69c9151d3b22947b9003.jpg",
      name: "image 1",
    },
    {
      url: "https://gameviet.mobi/wp-content/uploads/2020/02/download-hinh-nen-lien-quan-mobile-gameviet.mobi_-1280x640.jpg",
      name: "image 1",
    },
    {
      url: "https://d9n64ieh9hz8y.cloudfront.net/wp-content/uploads/20201219213228/league-of-riot-dang-thuc-hien-league-of-legends-mmorpg-tin-game.jpg",
      name: "image 1",
    },
    {
      url: "https://i.ytimg.com/vi/6vZ6Px-ak-I/maxresdefault.jpg",
      name: "image 1",
    },
    {
      url: "https://gameviet.mobi/wp-content/uploads/2020/03/Hinh-Nen-Lien-Quan-Mobile-Wallpaper-Cho-Iphone-Android-1280x640.jpg",
      name: "image 1",
    },
    {
      url: "https://i.pinimg.com/originals/07/c9/76/07c976b89fbc69c9151d3b22947b9003.jpg",
      name: "image 1",
    },
  ];
  const sliderProps = {
    focusOnSelect: true,
    infinite: true,
    variableWidth: true,
    speed: 500,
    slidesToShow: 4,
    nextArrow: (
      <button>
        <NextIcon />
      </button>
    ),
    prevArrow: (
      <button>
        <PrevIcon />
      </button>
    ),
    beforeChange: (current, next) => {
      setActiveIndexSlide(next);
    },
  };

  return (
    <div className="slide-bar">
      <div className="slide-bar__thumbnail">
        <div
          className="thumbnail-image"
          style={{
            backgroundImage: "url('" + listSlide[activeIndexSlide].url + "')",
          }}
        ></div>
      </div>
      <div className="content-left">
        <div className="live-status">
          <StreamIcon />
          <span>Live</span>
        </div>
        <h2 className="title">
          Renegades vs Chiefs - ESL Pro League Season 16 - Playoffs
        </h2>
        <div className="info">
          <img
            alt="profile-avt"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU4Y4MQ9wIV2PFlUuQHngDdp7ZKu8UTMrR7EE7thtSKLgZhp1LW3ArIp6NZyDRgSwaM_E&usqp=CAU"
          />
          <span className="name">Langue of Legends </span>
          <span className="region">us English</span>
        </div>
        <button className="watch">Watch</button>
      </div>
      <div className="content-right slide-control">
        <Slider className="slide" {...sliderProps}>
          {listSlide.map((item, index) => {
            return (
              <div key={index}>
                <div
                  style={{
                    backgroundImage: "url('" + item.url + "')",
                  }}
                ></div>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="progress-bar" style={{ "background-size": (activeIndexSlide*100)/(listSlide.length-1) + "% 100%" }} />
    </div>
  );
}

export default SliderBar;
